import { useState } from "react";
import PostList from "./PostList";

const Main = ({ posts, addPost }) => {
  const [postTitle, setPostTitle] = useState();
  const [postBody, setPostBody] = useState();

  const addNewPost = () => {
    const newPost = { id: 4, title: postTitle, body: postBody };
    addPost(newPost);
    setPostTitle('');
    setPostBody('');
  };

  const onChangeTitle = (e) => {
    setPostTitle(e.target.value);
  };

  const onChangeBody = (e) => {
    setPostBody(e.target.value);
  };

  return (
    <div className="main">
      <PostList posts={posts} />
      <div>
        <input value={postTitle} onChange={onChangeTitle} />
        <input value={postBody} onChange={onChangeBody} />
      </div>
      <div>
        <button onClick={addNewPost}>Add post</button>
      </div>
    </div>
  );
};

export default Main;
