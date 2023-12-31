import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import "./Table.css";
import { useSortableTable } from "../../useSortableTable";

export const Table = ({ columns, persons }) => {
  console.log(persons);
  console.log(columns);
  const [tableData, handleSorting] = useSortableTable(persons, columns);

  return (
    <table className="table">
      <TableHead columns={columns} handleSorting={handleSorting} />
      <TableBody columns={columns} tableData={tableData} />
    </table>
  );
};
