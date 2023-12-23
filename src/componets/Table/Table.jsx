import { useState } from "react";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import tableData1 from "../../tableData.json";
import "./Table.css";

export const Table = () => {
  const [tableData, setTableData] = useState(tableData1);
  const columns = [
    { lable: "Full Name", key: "full_name" },
    { lable: "Gender", key: "gender" },
    { lable: "Age", key: "age" },
    { lable: "Email", key: "email" },
  ];

  const hadleSortDataString = () => {
    setTableData((prevState) =>
      prevState.sort((a, b) => a.name.localeCompare(b.name))
    );
    // setTableData(prevState => prevState.sort((a, b) => a.name < b.name ? -1 : 1))
  };

  const hadleSortDataNumber = () => {
    // setTableData(prevState => prevState.sort((a, b) => a.age - b.age))
    setTableData((prevState) =>
      prevState.sort((a, b) =>
        a.age
          .toString()
          .localeCompare(b.age.toString(), "en", { numeric: true })
      )
    );
  };
  return (
    <table className="table">
      {/* <TableHead columns={columns} /> */}
      <thead>
        <tr>
          <TableHead lable="Full Name" key="full_name" />
          <TableHead lable="Gender" key="gender" />
          <TableHead lable="Age" key="age" />
          <TableHead lable="Email" key="email" />
        </tr>
      </thead>
      <TableBody columns={columns} tableData={tableData} />
    </table>
  );
};
