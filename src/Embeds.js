import React from 'react';

export const YoutubeEmbed = () => {

    return (
    <div>
        <iframe id="youtube" width="auto" height="auto" src="https://www.youtube-nocookie.com/embed/videoseries?controls=1&amp;list=PLef6OG5U_LcEBSzyXs4QhxZ0j6HKZ_2e4&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    );
}

export const SoundcloudEmbeds = ({width, height, width2, height2}) => {
    return (
        <>
        <iframe id="sc1" title='sc1' scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1657406503&color=%23ecff00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        <iframe id="sc2" title='sc2' scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1657406821&color=%234dd41c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        </>
    ); 
}

//export both components

