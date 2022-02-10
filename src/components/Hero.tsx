import React from 'react';
import './Hero.css';

export default function Hero(): JSX.Element {
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
