import React from 'react';
import Youtube from 'react-youtube';
import ReactPlayer from 'react-player';

export const YoutubeEmbed = () => {
    const opts = {
        //height and with fit contaitner
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            mute: 1,
            controls: 1,
            listType: 'playlist',
            list: 'PLef6OG5U_LcEBSzyXs4QhxZ0j6HKZ_2e4',
        },
    };
    return (
        <>
            <div id="vids">
                <ReactPlayer width="100%" height="100%" url="https://www.youtube.com/playlist?list=PLef6OG5U_LcEBSzyXs4QhxZ0j6HKZ_2e4/"
                    config={{
                        youtube: {
                            playerVars: {
                                autoplay: 1,
                                mute: 1,
                                controls: 1,
                                listType: 'playlist',
                                list: 'PLef6OG5U_LcEBSzyXs4QhxZ0j6HKZ_2e4',
                            }
                        }
                    }}
                />
            </div>
            <div id="vids2">
            <ReactPlayer width="100%" height="100%" url="https://www.youtube.com/playlist?list=PLef6OG5U_LcGwUvzZZcZytgm-57Tx_vx2"
                    config={{
                        youtube: {
                            playerVars: {
                                autoplay: 1,
                                mute: 1,
                                controls: 1,
                                listType: 'playlist',
                                list: 'PLef6OG5U_LcGwUvzZZcZytgm-57Tx_vx2',
                            }
                        }
                    }}
                />
            </div>
        </>
    );
}

export const SoundcloudEmbeds = ({width, height, width2, height2}) => {
    return (
        <>
        <div id="sc1">
        <ReactPlayer height="100%" width="100%" url="https://soundcloud.com/rapisdead-878669550/sets/essential-mixes"
            config={{
                soundcloud: {
                    options: {
                        auto_play: false,
                        show_comments: false,
                        show_user: false,
                        show_reposts: false,
                        show_teaser: true,
                        visual: false,
                        color: '#ff5500'
                    }
                }
            }}
        />
        </div>
       <div id="sc2">
        <ReactPlayer height="100%" width="100%" url="https://soundcloud.com/rapisdead-878669550/sets/rapisdead"
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
    ); 
}

//export both components

