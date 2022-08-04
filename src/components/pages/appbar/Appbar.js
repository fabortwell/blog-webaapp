import {Link} from "react-router-dom";
import "./appbar.css"


function Appbar ({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <div className="top">
    <div className="topLeft">
    <li className="topLeft"> 
            TECHY-CONVO
           </li>
    </div>
    <div className="topCenter">
        <ul className="topList">
         <li className="topListItem"> 
           <Link className="link" to="/home">HOME</Link>
           </li>
         <li className="topListItem">
         <Link className="link" to="/sidebar">ABOUT</Link>
         </li>
         <li className="topListItem">
         <Link className="link" to="/sidebar">CONTACT</Link>
         </li>
         <li className="topListItem">
         <Link className="link" to="/write">WRITE</Link>
         </li>
         <li className="topListItem">
         <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup">LOGIN</Link>
            <Link to="/login">REGISTER</Link>
          </>
        )}
      </div>
         <Link className="link" to="/login">LOGIN</Link>
         </li>

         <li className="topListItem">
         <Link className="link" to="/register">REGISTER</Link>
         </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
export default Appbar
// import React from "react";
// import { Link } from "react-router-dom";

// function NavBar({ user, setUser }) {
//   function handleLogoutClick() {
//     fetch("/logout", { method: "DELETE" }).then((r) => {
//       if (r.ok) {
//         setUser(null);
//       }
//     });
//   }

//   return (
//     <>
//     <header>
//       <div>
//         <Link to="/">Home</Link>
//       </div>
//       <div>
//         {user ? (
//           <button onClick={handleLogoutClick}>Logout</button>
//         ) : (
//           <>
//             <Link to="/signup">Signup</Link>
//             <Link to="/login">Login</Link>
//           </>
//         )}
//       </div>
//     </header>
   
//     </>
//   );
// }

// export default NavBar;