import React, { useEffect } from "react";

const AudioPlayer = ({ src }) => {
  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [src]);

  return null; // Since this component doesn't render anything, return null
};

export default AudioPlayer;
