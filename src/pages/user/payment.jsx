import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import withStudentAuth from "components/auth/withStudentAuth";

const defaultData = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("visits", {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
    footer: (info) => info.column.id,
  }),
];

const Payment = () => {
  const [data, setData] = useState([...defaultData]);
  const rerender = useState({})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <DashboardLayout>
        <div className="w-full px-[25px] text-white">
          <div className="mb-[25px] md:mb-[40px]">
            <p className="font-space font-[700] text-[20px] leading-[25.5px]">
              Payments
            </p>
            <p className="text-defaultFontColor font-space font-[400] text-[14px] leading-[18px] mt-[8px]">
              Fulfill any outstanding payments
            </p>
          </div>
          <div className="container mx-auto p-4 bg-white text-black shadow rounded-[7.4px]">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id} className="text-[#667085] border">
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          className="text-[#667085] p-2 border-r"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
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
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="h-4" />
        </div>
      </DashboardLayout>
    </>
  );
};

export default withStudentAuth(Payment);
