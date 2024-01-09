import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const InfoUser = () => {
  const params = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${params.id}`;
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setUser(allPersons);
    });
  }, [setUser]);

  console.log(user);

  return (
    <>
      {user ? (
        <div className="info-user">
          <h2>{user.name}</h2>
          <h3>Nik: {user.username}</h3>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address.city}, {user.address.street}, {user.address.suite}</p>
        </div>
      ) : (
        false
      )}
    </>
  );
};
