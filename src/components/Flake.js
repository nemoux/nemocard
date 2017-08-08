import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import AnimatedFlake from './AnimatedFlake';

const Flake = (props) => {
  return (
    <ReactTransitionGroup key="AnimatedFlake" component="div">
      <AnimatedFlake {...props} />
    </ReactTransitionGroup>
  );
}

export default Flake;