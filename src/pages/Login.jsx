import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
 const Login = () => {
  const [err,setErr]=useState(false);
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Chat Application</span>
            <span className="title">Login</span>
            <form  onSubmit={handleSubmit}>
                <input style={{border: 'none', borderBottom: '1px solid #a7bcff'}}type="email" placeholder="Enter your Email"/>
                <input style={{border: 'none', borderBottom: '1px solid #a7bcff'}} type="password"placeholder="Enter Password"/>
                <button>Sign In</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You already have a account? Register<Link to="/register">Register</Link></p>
        </div>
    </div>
  );
};
 export default Login;