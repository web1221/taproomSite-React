import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/newKeg">Create New Keg</Link>
    </div>
  );
}

export default NavBar;
