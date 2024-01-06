import axios from "axios";
import React, { useEffect, useState } from "react";
import UserData from "./componets/UserData";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(11);
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const [postName, setPostName] = useState("");
  const [postUserName, setPostUserName] = useState("");
  const [postEmail, setPostEmail] = useState("");
  const [postAdress, setPostAdress] = useState("");

  const addNewPost = () => {
    setCount((count) => count + 1);
    const newPost = {
      id: count,
      name: postName,
      username: postUserName,
      email: postEmail,
      address: postAdress,
    };
    addPost(newPost);
    setPostName("");
    setPostUserName("");
    setPostEmail("");
    setPostAdress("");
  };

  const onChangeName = (e) => {
    setPostName(e.target.value);
  };
  const onChangeUserName = (e) => {
    setPostUserName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setPostEmail(e.target.value);
  };

  const onChangeAdress = (e) => {
    setPostAdress(e.target.value);
  };

  const [appState, setAppState] = useState({
    loading: false,
    persons: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
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
      <div className="main">
        <div className="inputs">
          <label>
            Name: <input value={postName} onChange={onChangeName} />
          </label>
          <label>
            Nik: <input value={postUserName} onChange={onChangeUserName} />
          </label>
          <label>
            Email: <input value={postEmail} onChange={onChangeEmail} />
          </label>
          <label>
            Adress: <input value={postAdress} onChange={onChangeAdress} />
          </label>
        </div>
        <div>
          <button onClick={addNewPost}>Добавить</button>
        </div>
      </div>
      {appState.loading ? (
        <h1>Подождите, данные загружаются!</h1>
      ) : (
        <UserData persons={appState.persons} posts={posts} />
      )}
    </div>
  );
}

export default App;
