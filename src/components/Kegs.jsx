import React from 'react';
import PropTypes from 'prop-types';
import KegCounter from './KegCounter'

function Keg(props){

  const imageSize = {
    height: "140px",
    width: "150px"
  }

  const layoutKeg = {
    display: "inline-block",
    width: "20vw",
    margin: "20px 0px 50px 90px"


  }
  return (
    <div style={layoutKeg}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h3>{props.names} </h3>
            <img style={imageSize} src={props.image} alt='brewery logo'/>
          </div>

          <div class="flip-card-back">
            <h3>{props.brewery}</h3>
            <p><em>{props.AlcContent}</em></p>
            <p>Pints Left:<KegCounter /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

Keg.propTypes = {
  brewery: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  AlcContent: PropTypes.string,
  image: PropTypes.string,
  kegId: PropTypes.string.isRequired
};

export default Keg;
