import { useState } from "react";
import Main from "./components/Main";
import "./App.css";

const postArray = [
  { id: 1, title: "React"},
  { id: 2, title: "Css"},
  { id: 3, title: "HTML"},
];

function App() {
  const [posts, setPosts] = useState(postArray);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="app">
      <Main posts={posts} addPost={addPost} />
    </div>
  );
}

export default App;
