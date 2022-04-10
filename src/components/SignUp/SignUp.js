import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import auth from '../../firebase.init';

const SignUp = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [errors, setError] = useState('');
   const [createUserWithEmailAndPassword, user, error] = useCreateUserWithEmailAndPassword(auth);
   const navigate = useNavigate();

   const handleEmailBlur = (event)=>{
      setEmail(event.target.value)
   }
   const handlePasswordBlur = (event)=>{
      setPassword(event.target.value)
   }
   const handleConfirmPasswordBlur = (event)=>{
      setConfirmPassword(event.target.value);
   }
   const handleCreateUser = (event)=>{
      event.preventDefault();
      if(password !== confirmPassword){
         setError('Your two password did not match')
         return;
      }
      if(password.length < 6){
         setError('Password must be six character');
         return;
      }

      createUserWithEmailAndPassword(email, password)
      .then(() => {
         console.log(user);
      })
   }  

   if(user){
      navigate('/');
   }

   return (
      <div className="form-container">
         <div>
            <form onSubmit={handleCreateUser}>
               <h2 className="form-title">Sign Up</h2>
               <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input onBlur={handleEmailBlur} type="email" name='email' placeholder="Enter Email" required />
               </div>

               <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input onBlur={handlePasswordBlur} type="password" name='password' placeholder="Enter Password" required />
               </div>

               <div className="input-group">
                  <label htmlFor="password-2">Confirm Password</label>
                  <input onBlur={handleConfirmPasswordBlur} type="password" name='password-2' placeholder="Re-type Password" required />
               </div>
               <p style={{color:'tomato'}}>{errors || error}</p>
               <input type="submit" value="SignUp" />
            </form>
            <p>Already have an account? <Link className="form-link" to='/login'>Login</Link></p>

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

export default SignUp;