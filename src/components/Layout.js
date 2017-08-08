import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import StyledLayout from './StyledLayout';
import AnimatedLayout from './AnimatedLayout';
import Flake from './Flake';

const Layout = (props) => {
  return (
    <ReactTransitionGroup key="AnimatedLayout">
      <AnimatedLayout {...props} />
    </ReactTransitionGroup>
  );
}

export default Layout;