import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project1 from './project1/index1';
import Project2 from './project2/index2';
import Project3 from './project3/index3';
import Project4 from './project4/index4';
import Project5 from './project5/index5';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/project1" element={<Project1/>} />
        <Route path="/project2" element={<Project2/>} />
        <Route path="/project3" element={<Project3/>} />
        <Route path="/project4" element={<Project4/>} />
        <Route path="/project5" element={<Project5/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;