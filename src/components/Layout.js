import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import StyledLayout from './StyledLayout';
import AnimatedLayout from './AnimatedLayout';

const Layout = (props) => {
  return (
    <StyledLayout>
      <ReactTransitionGroup key="AnimatedLayout">
        <AnimatedLayout {...props} />
      </ReactTransitionGroup>
    </StyledLayout>
  );
}

export default Layout;