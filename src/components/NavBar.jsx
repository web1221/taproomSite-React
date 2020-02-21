import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  const navBarStyle = {
    backgroundColor: "#f4eed4",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "20px",
    display: "flex",
    justifyContent: "space-between",

  }

  const homeLink = {
    backgroundColor: "#3c7a91",
    border: "solid 1px white",
    borderRadius: "5px",
    textDecoration: "none",
    justifyContent: "center",
    padding: "10px"
  }

  const barName = {
    color: "#3c7a91",
    marginBottom: "10px",
    fontSize: "40px"
  }

  const linkNav = {
    display: "flex"

  }


  return (
    <div style={navBarStyle}>
      <div style={linkNav}>
        <p><Link style={homeLink} to="/">Home</Link></p>
        <p><Link style={homeLink} to="/taplist">On Tap</Link></p>
      </div>
      <div style={barName}>
        <h3>Beer Pitch</h3>
      </div>
    </div>
  );
}

export default NavBar;
