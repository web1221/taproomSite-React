import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <h3>{props.name} - {props.brewery}</h3>
      <p><em>{props.AlcContent}</em></p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  brewery: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  AlcContent: PropTypes.string
};

export default Keg;
