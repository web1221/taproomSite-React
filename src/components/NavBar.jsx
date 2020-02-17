import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  const navBarStyle = {
    backgroundColor: "black",
    padding: "20px",
    fontSize: "20px"
  }

  const topBackground = {
    padding: "5px",
    backgroundColor: "rgba(252, 15, 3, .5)",
    display: "flex",
    justifyContent: "flex-start",
  }

  const homeLink = {
    backgroundColor: "black",
    border: "solid 1px white",
    lineHeight: "100px",
    padding: "0px 50px 0px 50px",
    textDecoration: "none",
  }
  const tapLink = {
    backgroundColor: "black",
    border: "solid 1px white",
    lineHeight: "100px",
    padding: "0px 50px 0px 50px",
    textDecoration: "none",
  }

  return (
    <div style={navBarStyle}>
      <div style={topBackground}>
      <Link style={homeLink} to="/">Home</Link>
      <Link style={tapLink} to="/taplist">On Tap</Link>
      </div>
    </div>
  );
}

export default NavBar;
