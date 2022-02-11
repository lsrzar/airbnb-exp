import React from 'react';
import './Card.css';

interface CardProps {
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
}

const Card: React.FC<CardProps> = ({ info }) => {
  let stockText: string = '';
  if (info.openSpots === 0) {
    stockText = 'SOLD OUT';
  } else if (info.location === 'Online') {
    stockText = info.location.toUpperCase();
  }

  return (
    <div className='card'>
      {stockText && <div className='card--stock'>{stockText}</div>}
      <img
        className='card--img'
        src={`./images/${info.coverImg}`}
        alt={info.alt}
      />
      <div className='card--info'>
        <div className='card--rating'>
          <img
            className='card--rating-star'
            src='./images/star.png'
            alt='Red star'
          />
          <p className='card--rating-text'>
            {info.stats.rating}
            <span className='card--rating-text-light'>
              ({info.stats.reviewCount}) • {info.location}
            </span>
          </p>
        </div>
        <p className='card--text'>{info.title}</p>
        <p className='card--price'>
          <b>From ${info.price}</b> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
