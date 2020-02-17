import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div className="flip-card">
      <div className="flip-card-inner">

        <div className="flip-card-front">
          <h3>{props.names} </h3>
        </div>

        <div class="flip-card-back">
          <p>{props.brewery}</p>
          <p><em>{props.AlcContent}</em></p>
        </div>
        
      </div>
    </div>
  );
}

Keg.propTypes = {
  brewery: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  AlcContent: PropTypes.string
};

export default Keg;
