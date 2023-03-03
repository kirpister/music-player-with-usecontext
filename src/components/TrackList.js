import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

const TrackList = () => {

    const music = useMusicPlayer();

    return (
        <>
        <div>
            {music.trackList.map((track, index) => (
                <div>
                    <button onClick={() => music.playTrack(index)}>
                        {music.isPlaying && music.currentTrackIndex === index ? (
                            <FontAwesomeIcon icon={faPause} />
                            ) : (
                            <FontAwesomeIcon icon={faPlay} />
                            )}
                    </button>
                    <div>Track Playing: {track.name}</div>
                    <hr />
                </div>
            ))}
        </div>
        </>
    );
};

export { TrackList }