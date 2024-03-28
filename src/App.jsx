import React from "react";
import AudioPlayer from "./AudioPlayer";
import sound from "./assets/audio.mp3";
const App = () => {
  return (
    <div>
      <AudioPlayer src={sound} />
    </div>
  );
};

export default App;
