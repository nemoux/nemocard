import React from 'react';
import { func, object } from 'prop-types';
import Image from './Image';
import Video from './Video';
import Bodymovin from './Bodymovin';
import StyledFlake from './StyledFlake';

const Flake = ({ onClick, metadata }) => {
  let targets = metadata.targets.sort((a,b) => {
    return b.id - a.id;
  });

  targets = targets.map(target => {
      let component = null;
      const size = metadata.style.size;

      if (target.type === 'image') {
        component = (<Image key={target.id} {...size} src={target.path} />);
      } else if (target.type === 'video') {
        component = (<Video key={target.id} {...size} src={target.path} />);
      } else if (target.type === 'bodymovin') {
        component = (<Bodymovin key={target.id} />);
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
