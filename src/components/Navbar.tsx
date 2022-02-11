import React from 'react';
import './Navbar.css';

export default function Navbar(): React.ReactElement {
  return (
    <nav className='Navbar'>
      <a href='./index.html'>
        <img className='nav--logo' src='../images/airbnb-logo.svg' alt='logo' />
      </a>
    </nav>
  );
}
