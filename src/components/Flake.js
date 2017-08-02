import React from 'react';
import { func, object } from 'prop-types';
import Image from './Image';
import Video from './Video';
import Motion from './Motion';
import StyledFlake from './StyledFlake';

const Flake = ({ metadata, option, listeners }) => {
  let targets = metadata.targets.sort((a,b) => {
    return a.id - b.id;
  });

  targets = targets.map(target => {
      let component = null;

      if (target.type === 'image') {
        component = (<Image key={target.id} src={target.path} />);
      } else if (target.type === 'video') {
        component = (<Video key={target.id} src={target.path} />);
      } else if (target.type === 'motion') {
        component = (<Motion key={target.id} options={target} />);
      } else {
        component = (<div></div>);
      }

      return component;
    });

  return (
    <StyledFlake option={option} style={metadata.style} order={metadata.id}>
      <div {...listeners}>
        {targets}
      </div>
    </StyledFlake>
  );
}

Flake.propTypes = {
  onClick: func.isRequired,
  metadata: object.isRequired,
};

export default Flake;
