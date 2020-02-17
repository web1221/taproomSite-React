import React from 'react';
function Header(){

  const headerStyle = {
    textAlign: "center",
  }

  const roatingStyle = {
    marginBottom: "20px"
  }
  return (
    <div style={headerStyle}>
      <h1>Beers on Tap!</h1>
      <h4 style={roatingStyle}>Roating monthly</h4>
    </div>
  );
}

export default Header;
