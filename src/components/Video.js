import React from 'react';

const Video = (props) => {
  const style = {
    width: "100%",
    position: 'absolute',
    left: '0px',
    top: '0px'
  }

  return (
    <video {...props} style={{...style}} loop autoPlay>
      <source src={props.src} type="video/mp4" />
      Your browser does not support the video tag
    </video>
  );
};

export default Video; 