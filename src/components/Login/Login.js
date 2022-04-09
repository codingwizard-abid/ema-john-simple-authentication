import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
   return (
      <div className="form-container">
         <div>
            <form>
               <h2 className="form-title">Login</h2>
               <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name='email' placeholder="Enter Email" required />
               </div>

               <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="Enter Password" required />
               </div>
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
