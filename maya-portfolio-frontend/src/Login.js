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
      `http://localhost:5000/api/admin`,
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
        navigate('/');
    }
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="login-bg">
      <img src={logo} className="logo-login" alt='logo' />
      <div className="input-login">
        <label>Email</label>
        <input type="email" id="email" onChange={changeUsername} required />
      </div>
      <div className="input-login">
        <label>Password</label>
        <input type="password" id="password" onChange={changePass} required />
      </div>
      <button onClick={handleSubmit} className="submit-login">SUBMIT</button>
    </div>
  );
}

export default Login;