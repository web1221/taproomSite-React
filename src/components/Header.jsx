import React from 'react';
import BarImg from './headerBarImg.jpg'
function Header(){
  const headerImgStyle = {
    width: "100vw",
    margin: "10px"

  }
  return (
    <div style={headerImgStyle}>
      <img src={BarImg} alt='picture of taproom'/>
    </div>
  );
}

export default Header;
