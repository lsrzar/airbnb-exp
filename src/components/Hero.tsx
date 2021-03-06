import React from 'react';
import './styles/Hero.css';

export default function Hero(): React.ReactElement {
  return (
    <section className='hero'>
      <img className='hero--grid' src='../images/photo-grid.png' alt='Grid' />
      <h1 className='hero--title'>Online Experiences</h1>
      <p className='hero--description'>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
