import React from "react";

const Video = ({ url }) => {
  return (
    <div>
      <iframe
        height="315"
        src={url}
        title="YouTube video player"
        frameborder="0"
        className="rounded-md w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
