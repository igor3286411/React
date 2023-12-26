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
  console.log(tableData);
  const hadleSortDataString = (e, keyId) => {
    // setTableData((prevState) =>
    //   prevState.sort((a, b) => a[keyId].localeCompare(b[keyId]))
    // );
    setTableData(prevState => prevState.sort((a, b) => a[keyId] < b[keyId] ? -1 : 1))
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
      {/* <TableHead columns={columns}/> */}
      <thead>
        <tr>
          <TableHead lable="Full Name" keys="full_name" onClick={hadleSortDataString} />
          <TableHead lable="Gender" keys="gender" onClick={hadleSortDataString} />
          <TableHead lable="Age" keys="age" onClick={hadleSortDataString}/>
          <TableHead lable="Email" keys="email" onClick={hadleSortDataString}/>
        </tr>
      </thead>
      <TableBody columns={columns} tableData={tableData} />
    </table>
  );
};
