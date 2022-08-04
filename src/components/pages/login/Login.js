
import {Link} from "react-router-dom";
import { useState } from "react";
import "./login.css"




function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

function handleSubmit(e) {
  e.preventDefault();
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  }).then((r) => {
    if (r.ok) {
      r.json().then((user) => onLogin(user));
    }
  });
}

  return (
    <div className="login">
        <span className="loginTitle">Login</span>
         <form onSubmit={handleSubmit} className="loginForm">
            <label>Username</label> 
            <input 
            type="text" 
            id="username"
            value={username}
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            className="loginInput" 
            placeholder="Enter your username..."/>
            <label htmlFor="password">Passowrd</label> 
            <input 
            type="password" 
            className="loginInput" 
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password..."/>
        <button className="loginButton" type="submit">Login</button>
         </form>
         <button className="loginRegisterButton">
           <Link className="link"  to="/register">Register</Link>
           </button>
    </div>
  )
}

export default Login


// import React, { useState } from "react";

// function Login({ setUser }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("http://localhost:3000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           autoComplete="off"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;