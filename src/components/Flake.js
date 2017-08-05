import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import StyledFlake from './StyledFlake';
import AnimatedFlake from './AnimatedFlake';

const Flake = (props) => {
  const param = {
    option: props.option,
    style: props.item.style,
    order: props.item.id
  };

  return (
    <StyledFlake {...param}>
      <ReactTransitionGroup key="AnimatedFlake">
        <AnimatedFlake {...props} />
      </ReactTransitionGroup>
    </StyledFlake>
  );
}

export default Flake;