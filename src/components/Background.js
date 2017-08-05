import React from 'react';
import { array, object } from 'prop-types';
import StyledBackground from './StyledBackground';
import Flake from './Flake';

const Background = (props) => {
  return (
    <StyledBackground>
      <Flake
        refCallback={() => console.log('bg flake')}
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