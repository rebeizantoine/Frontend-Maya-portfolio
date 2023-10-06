import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './Homepage.js';
import Login from './Login'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './dashboard.css';
import Project1 from './components/project1/index1';
import Project2 from './components/project2/index2';
import Project3 from './components/project3/index3';
import Project4 from './components/project4/index4';
import Project5 from './components/project5/index5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/dashboard' element={<App />} />
      <Route path='/login' element={<Login />} /><Route
        path="/project1"
        element={<Project1 />}
      />
      <Route
        path="/project2"
        element={<Project2 />}
      />
      <Route
        path="/project3"
        element={<Project3 />}
      />
      <Route
        path="/project4"
        element={<Project4 />}
      />
      <Route
        path="/project5"
        element={<Project5 />}
      />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
