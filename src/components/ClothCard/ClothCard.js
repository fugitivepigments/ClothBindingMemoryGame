import React from 'react';
import './ClothCard.css';

const ClothCard = props => (
  <div className='card'>
    <div className='img-container'>
      <a onClick={() => props.selectCloth(props.cloth)}
        className={props.curScore === 0 ? 'style_prevu_kit style_prevu_kit_ex' : 'style_prevu_kit'}
        >
        <img alt={props.cloth} src={props.image} />
      </a>
    </div>
  </div>
);

export default ClothCard;
