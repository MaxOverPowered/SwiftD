import React, { useEffect, useRef } from "react";
import video from "../utils/video.mp4";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 1;
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-gradient-to-br from-blue-500 to-purple-500">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-full h-4/6 border-4 border-white rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            src={video}
            autoPlay
            loop
            muted
            controlsList="nodownload"
            disablePictureInPicture
            className="w-full h-full outline-none transform scale-105"
            style={{ boxShadow: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
