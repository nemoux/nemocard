import React from 'react';
import { array } from 'prop-types';
import FlakeContainer from '../containers/FlakeContainer';
import StyledLayout from './StyledLayout';

const Layout = (props) => {
  const flakeContainers = props.items.map(item => 
    <FlakeContainer key={item.id} metadata={item} />
  );

  return (
    <StyledLayout>
      {flakeContainers}
    </StyledLayout>
  );
}

Layout.propTypes = {
  items: array.isRequired
};

export default Layout;