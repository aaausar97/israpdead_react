import './App.css';
import RapListBackground from './ListBackground';
import Discord from './Discord';
import TwitterTimeline from './Twitter';
import { SoundcloudEmbeds, YoutubeEmbed } from './Embeds';
import {Today, ArtistSpotlight} from './Today';
import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [hide, setHide] = useState(false);

    return (
        <div className="App">
          <h1><a href="/index">rap is dead</a></h1>
            <button className="hideButton" onClick={()=>{setHide(!hide)}}>show|hide</button>
            <img id="pic" width="350px" src={require('./dilla.jpg')} alt="j dilla"/>
            <div id="shell" style={{display: hide ? "none" : "flex"}}>
                <YoutubeEmbed/>
                <SoundcloudEmbeds />
                <Today />
                <ArtistSpotlight />
                <Discord />
                <TwitterTimeline />
            </div>
          <RapListBackground />
          <Analytics />
        </div>
    );
};

export default App;
