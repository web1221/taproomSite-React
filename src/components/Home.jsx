import React from 'react';
import Header from './Header';

function Home(){
  const aboutUsStyle = {
    border: "4px solid black",
    padding: "20px",
    margin: "10px 10px 0px 0px"
  }

  const eventsStyle = {
    border: "4px solid black",
    padding: "20px",
    margin: "10px 10px 0px 0px"
  }
  return (
    <div>
      <Header />
    <div className="row">
      <div className ="column" style={aboutUsStyle}>
        <h2>About Beer Pitch</h2>
        <p>Lorem ipsum dolor amet selfies fam 3 wolf moon aesthetic vaporware plaid skateboard direct trade woke. Crucifix thundercats pour-over yr wayfarers kitsch, offal health goth. Hammock gentrify iPhone, shoreditch shabby chic kitsch pork belly adaptogen copper mug. Try-hard unicorn cornhole next level flexitarian messenger bag. Etsy umami post-ironic typewriter schlitz, master cleanse distillery keytar lo-fi echo park tilde trust fund YOLO fam celiac.
        Oh. You need a little dummy text for your mockup? How quaint.
        I bet you’re still using Bootstrap too…</p>
      </div>
      <div className ="column" style={eventsStyle}>
        <h2>Events</h2>
        <ul>
          <li>02/13 Trivia Night!</li>
          <li>02/14 DJ Dead Beats Dad</li>
          <li>02/20 Food truck Friday</li>
          <li>02/22 PDX Bunnies in Baskets</li>
          <li>02/29 Craft Yoga</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Home;
