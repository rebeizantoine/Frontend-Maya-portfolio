import React from 'react';

function DashboardHeader() {
  return (
    <div className="header">
      <a href="#header"><img className="logo-maya" src="./src/logo-maya.png" alt="Logo"/></a>
      <p>Welcome to Your Dashboard</p>
      <button className="log-out">LOG OUT</button>
      
    </div>
  );
}

export default DashboardHeader;
