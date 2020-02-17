import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  const navBarStyle = {
    backgroundColor: "black",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "20px",
    display: "flex",
    justifyContent: "space-between"

  }

  const homeLink = {
    backgroundColor: "black",
    border: "solid 1px white",
    borderRadius: "5px",
    lineHeight: "100px",
    padding: "30px",
    marginLeft: "5px",
    textDecoration: "none",
  }

  const barName = {
    color: "white",

  }


  return (
    <div style={navBarStyle}>
    <Link style={homeLink} to="/">Home</Link>
    <Link style={homeLink} to="/taplist">On Tap</Link>
    <div style={barName}>
    <h3>WaBeer Inn</h3>
    </div>
    </div>
  );
}

export default NavBar;
