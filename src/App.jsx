import { useState } from "react";
import Main from "./components/Main";
import "./App.css";

const postArray = [
  { id: 1, title: "React", body: "The library for web and native user interfaces"},
  { id: 2, title: "Angular", body: "The web development framework for building the future"},
  { id: 3, title: "Vue", body: "The Progressive JavaScript Framework"},
];
function App() {
  const [posts, setPosts] = useState(postArray);
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  // console.log(postArray);
  return (
    <div className="app">
      <Main posts={posts} addPost={addPost} />
    </div>
  );
}

export default App;
