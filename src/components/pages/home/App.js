import { useState, useEffect } from "react";
// import Header from "./Header";
import NewPostForm from "../postform/NewPostForm";
import PostItem from "../post/PostItem";


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/spices")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  function handleAddPost(addedPost) {
    setPosts((posts) => [...posts, addedPost]);
  }

  function handleUpdatePost(updatedPost) {
    setPosts((posts) =>
      posts.map((post) => {
        return post.id === updatedPost.id ? updatedPost : post;
      })
    );
  }

  function handleDeletePost(deletedPost) {
    setPosts((posts) =>
      posts.filter((post) => post.id !== deletedPost.id)
    );
  }

  return (
    <>
      {/* <Header PostCount={posts.length} /> */}
      <main>
        <NewPostForm onAddPost={handleAddPost} />
        <section className="spice-list">
          {posts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              onUpdatePost={handleUpdatePost}
              onDeletePost={handleDeletePost}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;