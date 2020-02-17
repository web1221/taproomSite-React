import React from 'react';
function Header(){

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
      <h1 style={tapStyle}>Beers on Tap!</h1>
      <h4 style={roatingStyle}>Roating monthly</h4>
    </div>
  );
}

export default Header;
