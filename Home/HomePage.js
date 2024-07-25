import React from 'react';
import './home.css'
import NavBar from '../Navbar/NavBar';

const HomePage = () => {
  return (
    <div>
      <NavBar /> 
      <div className="content">
        <h1>Welcome to the Learning Management System</h1>
        <div className="categories">
          <h2>Categories</h2>
          <ul>
            <li><a href="#">Mathematics</a></li>
            <li><a href="#">Science</a></li>
            <li><a href="#">History</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
