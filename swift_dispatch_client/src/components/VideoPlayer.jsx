import React from "react";
import BackgroundVideo from "react-background-video-player";
import video from "../utils/video.mp4";

const VideoPlayer = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <BackgroundVideo
          src={video}
          autoPlay
          loop
          muted
          containerWidth="100%"
          containerHeight="56.25vh"
          overlay
        
          overlayAlpha={0.3}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
