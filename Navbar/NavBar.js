import React from 'react';
import './NavBar.css'; 
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="NavBar"> 
      <ul className="ul"> 
        <li className="li"><a className="a" href="/">Home</a></li> {/* Use className to apply CSS classes */}
        <li className="li"><a className="a" href="#">About</a></li> {/* Use className to apply CSS classes */}
        <li className="li"><a className="a" href="#">Services</a></li> {/* Use className to apply CSS classes */}
        <li className="li"><a className="a" href="#">Contact</a></li> {/* Use className to apply CSS classes */}
        <li><Link className="list"to="/login"> login </Link></li>
        <li><Link className="list1"to="/reg"> Signup</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
