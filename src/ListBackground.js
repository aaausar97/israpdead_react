import React from 'react';
import Marquee from "react-fast-marquee";
import times from 'lodash/times'; // helper to create an array, install it with `npm install lodash`


const RapListBackground = () => {
    const albums = [
        'babyface ray - summer\'s mine',
        'veeze - ganger',
        'niontay - dontay\'s inferno',
        'sharc - sharc wave',
        'icytwat - final boss',
        'valee, harry fraud - virtuoso',
        'rxkneph + dj rude one - the 1derful neph',
        'drego - lay low season',
        'sexyy red - hood hottest princess',
        'lucki - smd',
        'boldy james - prisoner of circumstance',
        'marijuanaXO - unc xo',
        'chris crack - battery operated simps',
        'icewear vezzo - paint the city',
        'danny jpeg - scarin the hoes',
        'big sad 1900 - die a legend',
        'bktherula - LVL5 P1',
        'bg lonnie bands - cant band the bm 2',
        'dae money - slae season 2',
        'shaudy kash - poundtown 6mix',
        'lunchbox - new jazz',
        'summrs - stuck in my ways',
        'wizz havin - mr. too sticky',
        'talibando - war lord',
        'ebk bckdoe - rookie of the year',
        'vayda - breeze',
        'skilla baby - we eat the most',
        'young nudy - gumbo',
        'babytron - just in case',
        'keem, kendrick - the hillbillies'
    ];

    const rappers = [
        'anycia',
        'sideshow',
        'bigXthaplug',
        'lunchbox',
        'bashfortheworld',
        'niontay',
        'ot7 quanny',
        'subiibabii',
        '454',
        'shaudy kash',
        'rxk',
        'glok40',
        'armani',
        'redda',
        'chris crack',
        'dc2trill',
        'tony shhnow',
        '1100himself',
        '800pts',
        'slime dollarz',
        '22nd jim',
        'daemoney',
    ];

    const producers = [
        'top$ide',
        'amir',
        'evilgiane',
        'cash cobain',
        'benjicold',
        'fish',
        'bhristo',
        'brentrambo',
        'mexikodro',
        'icytwat',
        'popstar benny',
        'rawbone',
        'no.label.ent'
    ];

    return (
        <div className='listBackground'>
            <div id="best" className='favorite_div'>
                <Marquee className="marquee" direction="left" speed={60}>
                    <div>                
                        <h2>best rap 2023</h2>    
                        <ListInfo list_info={albums}/>
                    </div>
                </Marquee>
            </div>
            <Marquee className="marquee" direction="right" speed={75}>
            <div id='ones_to_watch' className='favorite_div'>
                <div>              
                            <h2>best producers</h2>
                            <ListInfo list_info={producers}/>
                </div>
                <div>            
                            <h2>best rappers</h2>    
                            <ListInfo list_info={rappers}/>
                </div>
            </div>
            </Marquee>
        </div>
    )
};

const ListInfo = ({header, list_info}) => {
    return (
        <div style={{height: "fit-content"}}>
            {times(list_info.length, Number).map(id => (
                <div key={`marquee-example-${id}`}>
                    <b style={{fontSize: "20px"}}>{list_info[id]}</b>
                </div>
            ))}
            </div>
      );
    };

    

export default RapListBackground;
