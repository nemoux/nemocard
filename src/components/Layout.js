import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import StyledLayout from './StyledLayout';
import AnimatedLayout from './AnimatedLayout';
import Flake from './Flake';

class Layout extends React.Component {
  render() {
    return (
      <ReactTransitionGroup key="AnimatedLayout">
        <AnimatedLayout {...this.props} />
      </ReactTransitionGroup>
    );
  }
}

export default Layout;