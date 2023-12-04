import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Creative from './Creative';
import About from './About';
import Contact from './Contact';
import './Router.css'; // Importing the CSS file

const Routerr = () => {
  const getClassName = ({ isActive }) => isActive ? 'active-link' : '';

  return (
    <Router>
      <div>
        <nav className="navbarr">
          <ul>
            <li>
              <NavLink to="/" className={getClassName} end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={getClassName}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={getClassName}>Contact</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Creative />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Routerr;
