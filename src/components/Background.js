import React from 'react';
import { array } from 'prop-types';
import StyledBackground from './StyledBackground';
import Flake from './Flake';

const Background = (props) => {
  return (
    <StyledBackground>
      <Flake {...props} />
    </StyledBackground>
  );
}

Background.propTypes = {
  items: array.isRequired
};

export default Background;