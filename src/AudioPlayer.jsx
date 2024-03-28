import React, { useRef, useEffect } from "react";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to trigger effect only once when component mounts

  return (
    <div>
      <audio ref={audioRef} src={src} />
    </div>
  );
};

export default AudioPlayer;
