import React from 'react';
import BarImg from './headerBarImg.jpg'
function Header(){
  const headerImgStyle = {
    width: "100vw",
    height: "85vh",
    margin: "10px"

  }
  return (
    <div>
      <img style={headerImgStyle} src={BarImg} alt='picture of taproom'/>
    </div>
  );
}

export default Header;
