import React from 'react';
import { Link } from 'react-router-dom';
function BeerHeader(){

  const headerStyle = {
    textAlign: "center",
    color: "white"
  }

  const roatingStyle = {
    marginBottom: "20px"
  }
  const tapStyle = {
    textDecoration: "underline"
  }
  return (
    <div style={headerStyle}>
      <h1 style={tapStyle}>Beers on Tap</h1>
      <h4 style={roatingStyle}>Roating monthly</h4>
      <h3><Link to="/newkeg">Add a new Keg</Link></h3>
    </div>
  );
}

export default BeerHeader;
