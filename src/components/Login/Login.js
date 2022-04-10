import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useSignInWithEmailAndPassword(auth);

   const navigate = useNavigate();

   const handleEmailBlur = (event)=>{
      setEmail(event.target.value);
   }

   const handlePasswordBlur = (event)=>{
      setPassword(event.target.value);
   }
   if(loading){
      return <p>Loading...</p>
   }

   const handleEmailLogin =(event)=>{
      event.preventDefault();
      signInWithEmailAndPassword(email, password)
      .then(()=>{
         console.log(user?.user);
         navigate('/')
      })
   }

   return (
      <div className="form-container">
         <div>
            <form onSubmit={handleEmailLogin}>
               <h2 className="form-title">Login</h2>
               <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input onBlur={handleEmailBlur} type="email" name='email' placeholder="Enter Email" required />
               </div>

               <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input onBlur={handlePasswordBlur} type="password" name="password" placeholder="Enter Password" required />
               </div>
               <p>{error?.message}</p>
               <input type="submit" value="Login" />
            </form>
            <p>New to ema-john? <Link className="form-link" to='/signup'>Create a new account</Link></p>

            <div className="line-wrap">
               <div className="or-line"></div>
               <span className="or-text">Or</span>
               <div className="or-line"></div>
            </div>

            <button className="google-btn">Continue with Google</button>
         </div>
      </div>
   );
};

export default Login;
