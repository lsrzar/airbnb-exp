import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <a href='./index.html'>
        <img className='nav--logo' src='../images/airbnb-logo.png' alt='logo' />
      </a>
    </nav>
  );
}
