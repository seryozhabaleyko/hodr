import React from 'react';

import VideoCard from '../../components/VideoCard';

import './GameVideos.scss';

function GameVideos() {
    return (
        <div className="gp-game__videos gp-game-videos__list gp-game-videos__grid">
            {[...Array(24)].map((video, index) => (
                <VideoCard {...video} key={index} />
            ))}
        </div>
    );
}

export default GameVideos;
