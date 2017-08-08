import React from 'react';
import { object } from 'prop-types';
import StyledBackground from './StyledBackground';
import Flake from './Flake';

const Background = (props) => {
  return (
    <StyledBackground>
      <Flake
        refCallback={(el) => console.log('bg flake')}
        item={props.currentItem}
        option={props.option}
        listeners={props.listeners}>
      </Flake>
    </StyledBackground>
  );
}

Background.propTypes = {
  currentItem: object.isRequired,
  option: object.isRequired,
  listeners: object.isRequired
};

export default Background;