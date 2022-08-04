import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
// import Header from "./Header";
import NewPostForm from "../postform/NewPostForm";
import PostItem from "../post/PostItem";
import Appbar from "../appbar/Appbar"
import Login from "../login/Login"
import SignUp from "../register/SignUp"
// import Settings from "../settings/Settings"
// import Sidebar from "../sidebar/Sidebar"
import Hero from "../hero/Hero"
import SearchBar from "../search/SearchBar"
import HomePage from "../homepage/HomePage"

function App() {
  const [posts, setPosts] = useState([]);

   const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  useEffect(() => {
    fetch("https://blog-sitapp.herokuapp.com/posts")
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


<Appbar user={user} setUser={setUser} />
<Hero />
<SearchBar />
<NewPostForm />
{/* <PostItem /> */}
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <HomePage user={user}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/register">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        )}
      </main>
    </>



  
   
  );
}

export default App;

