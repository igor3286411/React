import React from "react";
import "./App.css";

import SortableTable from "./components/SortableTable";

const App = () => {
  return (
    
    <div className="container is-fluid">
      <h1 className="title mt-5">Сотрудники</h1>
      <SortableTable
        firstName="Имя"
        lastName="Фамилия"
        email="Почта"
        avatar="Аватар"
      />
    </div>
  );
};

export default App;
