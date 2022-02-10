import React from 'react';
import './Card.css';

export default function Card(props: {
  img: string;
  alt: string;
  rating: string;
  reviewCount: number;
  country: string;
  title: string;
  price: number;
}) {
  return (
    <div className='card'>
      <a className='card--stock' href='./index.html'>
        SOLD OUT
      </a>
      <img
        className='card--img'
        src={`./images/${props.img}`}
        alt={props.alt}
      />
      <div className='card--info'>
        <div className='card--rating'>
          <img
            className='card--rating-star'
            src='./images/star.png'
            alt='Red star'
          />
          <p className='card--rating-text'>
            {props.rating}
            <span className='card--rating-text-light'>
              ({props.reviewCount}) • {props.country}
            </span>
          </p>
        </div>
        <p className='card--text'>{props.title}</p>
        <p className='card--price'>
          <b>From ${props.price}</b> / person
        </p>
      </div>
    </div>
  );
}
