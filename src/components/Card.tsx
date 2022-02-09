import React from 'react';
import './Card.css';

export default function Card() {
  return (
    <div className='card'>
      <a className='card--stock' href='./index.html'>
        SOLD OUT
      </a>
      <img
        className='card--img'
        src='./images/katie-zaferes.png'
        alt='Katie Zafares smiling'
      />
      <div className='card--info'>
        <div className='card--rating'>
          <img
            className='card--rating-star'
            src='./images/star.png'
            alt='Red star'
          />
          <p className='card--rating-text'>
            5.0 <span className='card--rating-text-light'>(6) • USA</span>
          </p>
        </div>
        <p className='card--text'>Life lessons with Katie Zaferes</p>
        <p className='card--price'>
          <b>From $136</b> / person
        </p>
      </div>
    </div>
  );
}
