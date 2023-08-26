import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './AudioPlayer.css';

function AudioPlayer({ audioSrc }) {
  return (
    <div>
      <h2>Here's the mission, listen carefully</h2>
      <ReactAudioPlayer
        src={audioSrc}
        autoPlay
        controls
      />
      <h2>The next QR code is located on one of the big numbers</h2>
    </div>
  );
}

export default AudioPlayer;
