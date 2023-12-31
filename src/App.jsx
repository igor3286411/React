import axios from "axios";
import React, { useEffect, useState } from "react";
import UserData from "./componets/UserData";
import LoadingPersonsData from "./componets/LoadingPersonsData";
// import "./App.css";
import { Table } from "./componets/Table/Table";
// import tableData1 from "./tableData.json"

const columns = [
  { lable: "№", key: "id", sortable: true },
  { lable: "Name", key: "name", sortable: true },
  { lable: "UserName(Nik)", key: "username", sortable: true},
  { lable: "Email", key: "email", sortable: true },
  { lable: "Adress", key: "address", sortable: true },
];

// return (
//   <div>
//     <h1>Sortable table</h1>
//     <Table columns={columns} data={tableData1}/>
//   </div>
// );

function App() {
  const DataLoading = LoadingPersonsData(UserData);

  const [appState, setAppState] = useState({
    loading: false,
    persons: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl =
      "https://jsonplaceholder.typicode.com/users";
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState({
        loading: false,
        persons: allPersons,
      });
    });
  }, [setAppState]);


  return (
    <div className="app">
      <DataLoading isLoading={appState.loading} persons={appState.persons}/>
    </div>
  );
}

export default App;
