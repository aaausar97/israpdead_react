//component with with div with a "pip board backgroud" that has a heading "community board"
//then on that div a youtube embed with a pin sticking out of it
//then a soundcloud embed with a pin sticking out of it

import React from 'react';
import ReactPlayer from 'react-player';

function Pins() {
    return (
        <>
            <img id="pin1" src={require('./pin.png')} alt="pin" />
            <img id="pin2" src={require('./pin.png')} alt="pin" />
            <img id="pin3" src={require('./pin.png')} alt="pin" />
        </>
    )
};

function BoardItems() {
    return (
        <>
            <div id="board_yt">
                <ReactPlayer 
                    url=""
                    width="100%" height="100%"
                    config={{
                        youtube: {
                            playerVars: {
                                autoplay: 0,
                                mute: 1,
                                controls: 0,
                            }
                        }
                    }}   
                />
            </div>
            <div id="board_sc">
                <ReactPlayer
                    url=""
                    width="100%" height="100%" 
                    config={{
                        soundcloud: {
                            options: {
                                auto_play: false,
                                show_comments: true,
                                show_user: true,
                                show_reposts: true,
                                show_teaser: true,
                                visual: false,
                                color: '#ff5500'
                            }
                        }
                    }}
                />
            </div>
        </>
    )
};

function Board() {
    return (
        <>
            <Pins />
            <div id="board" background={require('./board.png')}>
                <h2 background={require('./stickynote.png')}>community board</h2>
            <BoardItems />
            </div>
        </>

    )
}

export default Board;