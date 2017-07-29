import React from 'react';

const Video = (props) => {
  return (
    <video {...props} loop autoPlay>
      <source src={props.src} type="video/mp4" />
      Your browser does not support the video tag
    </video>
  );
};

export default Video; 