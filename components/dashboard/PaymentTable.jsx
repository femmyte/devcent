import React from "react";
import { useRouter } from "next/router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { balanceCourse } from "services/paymentService";
// import { userPayments } from "lib/data/table";

const PaymentTable = ({ payments, session }) => {
  const router = useRouter();
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("paymentId", {
      header: () => "Payment Id",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("transaction_id", {
      header: () => "Transaction Id",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("paymentPlan", {
      id: "outstanding",
      header: () => "Outstanding",
      cell: (info) => {
        // console.log(info.row.original?.course._id);
        const id = info.row.original?.course._id;
        const paymentCount = payments.filter(
          (payment) => payment.course._id === id
        ).length;

        return info.getValue() === "part-payment" && paymentCount === 1 ? (
          <button
            onClick={() => handlePayBalance(id)}
            className="text-white bg-primaryPurple rounded-md px-2 py-1 hover:bg-purple-400"
          >
            Pay balance
          </button>
        ) : (
          <span>-</span>
        );
      },
    }),
    columnHelper.accessor("course.name", {
      header: () => "Course",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("paymentPlan", {
      header: () => "Payment Plan",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("amount", {
      header: () => "Amount",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Date",
      cell: (info) => <span>{new Date(info.getValue()).toDateString()}</span>,
    }),
    // columnHelper.accessor((row) => row.lastName, {
    //   id: "lastName",
    //   cell: (info) => <i>{info.getValue()}</i>,
    //   header: () => <span>Last Name</span>,
    //   footer: (info) => info.column.id,
    // }),
  ];

  const table = useReactTable({
    data: payments,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  async function handlePayBalance(id) {
    try {
      const { data: resData } = await balanceCourse(
        `/courses/${id}/balance`,
        session?.accessToken
      );
      router.push(resData.paymentPage);
    } catch (error) {
      console.log(error);
      console.log(error?.response?.data?.message);
    }
  }

  return (
    <div className="w-full">
      <table className="w-[900px] md:w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="text-[#667085] border">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="text-[#667085] p-2 border-r">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="text-center p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
      {payments.length > 10 && (
        <div className="w-[900px] md:w-full flex justify-end pr-2 md:pr-[initial]">
          <div className="flex items-center gap-2">
            <button
              className="border rounded px-2 py-1"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className="border rounded px-2 py-1"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button
              className="border rounded px-2 py-1"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
            <button
              className="border rounded px-2 py-1"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button>
            <span className="flex items-center ml-4 gap-1">
              <div>Page</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </strong>
            </span>
            <span className="flex items-center gap-1">
              | Go to page:
              <input
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="border p-1 rounded w-16"
              />
            </span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentTable;
