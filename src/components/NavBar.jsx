import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  const navBarStyle = {
    backgroundColor: "black",
    padding: "40px",
    fontSize: "20px"
  }

  const topBackground = {
    border: "2px red solid",
    padding: "15px",
    backgroundColor: "rgba(252, 15, 3, .5)"
  }
  return (
    <div style={navBarStyle}>
      <div style={topBackground}>
      <Link to="/">Home</Link> | <Link to="/taplist">On Tap</Link>
      </div>
    </div>
  );
}

export default NavBar;
