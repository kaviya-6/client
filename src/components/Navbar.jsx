import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Budget Manager</h1>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add-budget">Add Budget</Link></li>
          <li><Link to="/view-budgets">View Budgets</Link></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
