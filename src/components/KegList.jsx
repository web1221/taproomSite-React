import React from 'react';
import Kegs from './Kegs'
var masterKegList = [
  {
    names: 'WanderLust',
    brewery: 'Breakside',
    AlcContent: '6.7% ABV'
  },
  {
    names: 'SouthSide',
    brewery: 'Denizens Brewing Co.',
    AlcContent: '7.2% ABV'
  },
  {
    names: 'Family Drama',
    brewery: 'Flying Dog',
    AlcContent: '8.4% ABV'
  },
  {
    names: '120 Minute IPA',
    brewery: 'Dog Fish',
    AlcContent: '15% ABV'
  },
  {
    names: 'Peg Leg',
    brewery: 'Heavy Seas',
    AlcContent: '8% ABV'
  },
  {
    names: 'Hazy Rock',
    brewery: 'Pelican',
    AlcContent: '6.2% ABV'
  },
  {
    names: 'Straight Outta Portland',
    brewery: 'Migration',
    AlcContent: '7.3% ABV'
  },
];

function KegList(){
  return (
    <div>
    <hr/>
    {masterKegList.map((keg, index) =>
      <Kegs names={keg.names}
      brewery={keg.brewery}
      AlcContent={keg.AlcContent} />
    )}
    </div>
  );
}

export default KegList;
