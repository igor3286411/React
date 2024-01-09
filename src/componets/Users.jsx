import axios from "axios";
import React, { useEffect, useState } from "react";
import { User } from "./User";

export const Users = () => {
  const [appState, setAppState] = useState();

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [setAppState]);

  return (
    <>
      <User users={appState} />
    </>
  );
};
