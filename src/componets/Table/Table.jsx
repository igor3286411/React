import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import "./Table.css";
import { useSortableTable } from "../../useSortableTable";

export const Table = ({ columns, data }) => {
  const [tableData, handleSorting] = useSortableTable(data, columns);

  return (
    <table className="table">
      <TableHead columns={columns} handleSorting={handleSorting} />
      <TableBody columns={columns} tableData={tableData} />
    </table>
  );
};
