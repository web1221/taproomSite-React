import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  const navBarStyle = {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  }

  const homeLink = {
    textDecoration: "none",
    border: "1px solid black",
    width: "15px",
    flexGrow: "1",
    padding: "5px",
    margin: "2px",
    textAlign: "center",
  }

  const barName = {
    color: "white",
    fontSize: "60px",
    paddingTop: "10px",
  }

  const linkNav = {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "40px",
    paddingTop: "20px",
    width: "500px",
    }

  const barTitle = {
    textAlign: "center",
    margin: "5px",
    letterSpacing: "4px",
  }


  return (
    <div style={navBarStyle}>
      <div style={barName}>
        <h3 style={barTitle}>Beer Pitch</h3>
      </div>
      <div style={linkNav}>
        <Link style={homeLink} to="/">Home</Link>
        <Link style={homeLink} to="/taplist">On Tap</Link>
        <Link style={homeLink} to="/">About</Link>
        <Link style={homeLink} to="/">Careers</Link>
        <Link style={homeLink} to="/">Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
