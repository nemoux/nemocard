import React from 'react';
import { func, object } from 'prop-types';
import Image from './Image';
import Video from './Video';
import Motion from './Motion';
import StyledFlake from './StyledFlake';

const Flake = ({ onClick, metadata }) => {
  let targets = metadata.targets.sort((a,b) => {
    return b.id - a.id;
  });

  targets = targets.map(target => {
      let component = null;

      if (target.type === 'image') {
        component = (<Image key={target.id} width="100%" height="100%" src={target.path} />);
      } else if (target.type === 'video') {
        component = (<Video key={target.id} width="100%" height="100%" src={target.path} />);
      } else if (target.type === 'motion') {
        component = (<Motion key={target.id} width="100%" height="100%" options={target} />);
      } else {
        component = (<div></div>);
      }

      return component;
    });

  return (
    <div onClick={onClick}>
      <StyledFlake style={metadata.style}>
        {targets}
      </StyledFlake>
    </div>
  );
}

Flake.propTypes = {
  onClick: func.isRequired,
  metadata: object.isRequired,
};

export default Flake;
