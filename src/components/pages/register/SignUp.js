import {Link} from "react-router-dom";
import "./signup.css"



const SignUp = () => {
    return (

    <div className="register">
        <span className="registerTitle">Register</span>
         <form className="registerForm">
            <label>Username</label> 
            <input type="text" className="registerInput" placeholder="Enter your username..."/>
            <label>Email</label> 
            <input type="text" className="registerInput" placeholder="Enter your email..." required/>
            <label>Passowrd</label> 
            <input type="password" className="registerInput" placeholder="Enter your password..." required/>
            <label>Confirm Password</label> 
            <input type="password" className="registerInput" placeholder="Enter your password..." required/>
        <button className="registerButton">Register</button>
         </form>
         <button className="registerLoginButton">
           
           <Link className="link" to="/login">Login</Link>
         </button>
    </div>
  )
}

export default SignUp