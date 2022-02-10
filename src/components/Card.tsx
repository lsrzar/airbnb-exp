import React from 'react';
import './Card.css';

export default function Card(props: {
  key: number;
  info: {
    title: string;
    description: string;
    price: number;
    coverImg: string;
    stats: {
      rating: number;
      reviewCount: number;
    };
    alt: string;
    location: string;
    openSpots: number;
  };
}): JSX.Element {
  let stockText: string = '';
  if (props.info.openSpots === 0) {
    stockText = 'SOLD OUT';
  } else if (props.info.location === 'Online') {
    stockText = props.info.location.toUpperCase();
  }

  return (
    <div className='card'>
      {stockText && <div className='card--stock'>{stockText}</div>}
      <img
        className='card--img'
        src={`./images/${props.info.coverImg}`}
        alt={props.info.alt}
      />
      <div className='card--info'>
        <div className='card--rating'>
          <img
            className='card--rating-star'
            src='./images/star.png'
            alt='Red star'
          />
          <p className='card--rating-text'>
            {props.info.stats.rating}
            <span className='card--rating-text-light'>
              ({props.info.stats.reviewCount}) • {props.info.location}
            </span>
          </p>
        </div>
        <p className='card--text'>{props.info.title}</p>
        <p className='card--price'>
          <b>From ${props.info.price}</b> / person
        </p>
      </div>
    </div>
  );
}
