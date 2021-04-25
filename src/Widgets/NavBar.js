import React from 'react';

import {Link} from 'react-router-dom';

import './NavBar.css';


const NavBar = () => {
  return (
    <header>
    <div className="container-fluid navbar custom-navbar">
        <h1 className="logo"><Link to="/">PyraSleep</Link></h1>
          <nav>
            <ul className="navigation">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/calculate">Calculate</Link></li>
              <li><Link to="/information">Information</Link></li>
            </ul>
          </nav>
      </div>
      </header>
  );
}

export default NavBar;
