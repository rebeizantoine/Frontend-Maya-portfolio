import React, { useState } from 'react';
import logo from './logo-maya.png';
import {useNavigate} from "react-router-dom";
import './login.css'; 
import axios from 'axios';

function Login() {
  const [username,setUsername]=useState();
  const [pass,setPass]=useState();
  const navigate=useNavigate();
  const changeUsername=(e)=>{
    setUsername(e.target.value);
  }
  const changePass=(e)=>{
    setPass(e.target.value);
  }
  const handleSubmit=async()=>{
    try{
    const result=await axios.post(
      `${process.env.REACT_APP_API_URL}/api/admin`,
      JSON.stringify({
        username:username,
        password:pass
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    if(!result) throw new Error("Failed while logging in ");
    if(result){
        navigate('/dashboard');
    }
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className='container'>
    <div className="login-bg">
      <img src={logo} className="logo-login" alt='logo' />
      <div className="input-login">
        <label className='labelEmail'>Email</label>
        <input className='email' type="email" id="email" onChange={changeUsername} required />
      </div>
      <div className="input-login">
        <label className='labelPassword'>Password</label>
        <input className='password' type="password" id="password" onChange={changePass} required />
      </div>
      <button onClick={handleSubmit} className="button-b">SUBMIT</button>
    </div>
    </div>
  );
}; 

export default Login;