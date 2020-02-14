import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  const navBarStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "40px"
  }
  return (
    <div style={navBarStyle}>
      <Link to="/">Home</Link> | <Link to="/taplist">On Tap</Link>
    </div>
  );
}

export default NavBar;
