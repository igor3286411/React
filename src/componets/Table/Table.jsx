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

// const hadleSortDataString = () => {
//   setTableData(prevState => prevState.sort((a, b) => a.name.localeCompare(b.name)))
//   // setTableData(prevState => prevState.sort((a, b) => a.name < b.name ? -1 : 1))

// }

// const hadleSortDataNumber = () => {
//   // setTableData(prevState => prevState.sort((a, b) => a.age - b.age))
//   setTableData(prevState => prevState.sort((a, b) => a.age.toString().localeCompare(b.age.toString(), 'en', { numeric:true})))

// }
