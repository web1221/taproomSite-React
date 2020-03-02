import React from 'react';
import Keg from './Kegs';
import BeerHeader from './BeerHeader';
import BreakSide from './img/breakside.png';
import FlyingDog from './img/flyingdog.png';
import Denizens from './img/denizens2.png';
import HeavySeas from './img/heavyseas.png';
import BaseCamp from './img/basecamp.png';
import Pelican from './img/pelican.png';
import DCBrau from './img/dcbrau.png';
import Rogue from './img/rogue.png';
import { connect } from 'react-redux';

var HCkegList = [
  {
    names: 'WanderLust',
    brewery: 'Breakside',
    AlcContent: '6.7% ABV',
    image: BreakSide,
  },
  {
    names: 'SouthSide',
    brewery: 'Denizens Brewing Co.',
    AlcContent: '7.2% ABV',
    image: Denizens,
  },
  {
    names: 'Family Drama',
    brewery: 'Flying Dog',
    AlcContent: '8.4% ABV',
    image: FlyingDog,
  },
  {
    names: 'Full Transparency',
    brewery: 'DC Brau',
    AlcContent: '5% ABV',
    image: DCBrau,
  },
  {
    names: 'Peg Leg',
    brewery: 'Heavy Seas',
    AlcContent: '8% ABV',
    image: HeavySeas,
  },
  {
    names: 'Hazy Rock',
    brewery: 'Pelican',
    AlcContent: '6.2% ABV',
    image: Pelican,
  },
  {
    names: 'Send It',
    brewery: 'Base Camp',
    AlcContent: '7.3% ABV',
    image: BaseCamp,
  },
  {
    names: 'DEAD GUY',
    brewery: 'Rouge',
    AlcContent: '6.8% ABV',
    image: Rogue,
  },
];

function KegList(props) {
  return (
    <div>
      <BeerHeader />
      <div>
        {HCkegList.map((keg, index) => (
          <Keg
            names={keg.names}
            brewery={keg.brewery}
            AlcContent={keg.AlcContent}
            image={keg.image}
            key={index}
          />
        ))}

        {Object.keys(props.kegList).map(function(kegId) {
          let keg = props.kegList[kegId];
          return (
            <Keg
              names={keg.names}
              brewery={keg.brewery}
              AlcContent={keg.AlcContent}
              image={keg.image}
              key={kegId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default connect()(KegList);
