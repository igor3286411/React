import "./App.css";
import { Table } from "./componets/Table/Table";
import tableData1 from "./tableData.json"

const columns = [
  { lable: "Full Name", key: "full_name", sortable: true },
  { lable: "Gender", key: "gender", sortable: true, sortbyOrder: 'desc' },
  { lable: "Age", key: "age", sortable: true },
  { lable: "Email", key: "email", sortable: false },
];

function App() {
  return (
    <div>
      <h1>Sortable table</h1>
      <Table columns={columns} data={tableData1}/>
    </div>
  );
}

export default App;
