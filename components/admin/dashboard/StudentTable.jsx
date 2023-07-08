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
import Image from "next/image";
// import { userPayments } from "lib/data/table";

const StudentTable = ({ students, session }) => {
  const router = useRouter();
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("userId", {
      header: () => "Student Id",
      cell: (info) => {
        const data = info.row.original;
        return (
          <span className="flex gap-4">
            <Image
              src={
                data?.imgUrl ? data?.imgUrl : "/images/icons/avatar-icon.jpg"
              }
              height={37}
              width={37}
              alt={data?.lastName}
              className=" rounded-full mr-2"
            />
            <span>{info.getValue()}</span>
          </span>
        );
      },
    }),
    columnHelper.accessor("lastName", {
      id: "name",
      header: () => "Name",
      cell: (info) => {
        const data = info.row.original;
        const name = `${data?.firstName} ${data?.lastName}`;

        return name;
      },
    }),
    columnHelper.accessor("isActivated", {
      header: () => "Account Status",
      cell: (info) =>
        info.getValue() === true ? (
          <span className="text-green-500 font-bold">Activated</span>
        ) : (
          <span className="text-red-500 font-bold">x</span>
        ),
    }),
    columnHelper.accessor("email", {
      header: () => "Email Address",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("enrolledCourses", {
      header: () => "Courses",
      cell: (info) => {
        const length = info.row.original?.enrolledCourses?.length;
        return length > 0 ? length : "None";
      },
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Joined",
      cell: (info) => <span>{new Date(info.getValue()).toDateString()}</span>,
    }),
  ];

  const table = useReactTable({
    data: students,
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
      {students.length > 10 && (
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

export default StudentTable;
