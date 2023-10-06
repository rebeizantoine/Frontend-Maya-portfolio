import React from 'react';
import logo from './logo-maya.png'

function DashboardHeader() {
  return (
<div className="dash-header">
      <a href="#header"><img className="dash-logo-maya" src={logo} alt="Logo"/></a>
      <p>Welcome to Your Dashboard</p>
      <button className="log-out">LOG OUT</button>
    </div>
  );
}

export default DashboardHeader;
