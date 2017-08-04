import React from 'react';

const Image = (props) => {
  const style = {
    width: "100%",
    position: 'absolute',
    left: '0px',
    top: '0px'
  }

  return (
    <img {...props} style={{...style}} />
  );
};

export default Image