import React from 'react';
import { array } from 'prop-types';
import Flake from './Flake';
import StyledLayout from './StyledLayout';

const Layout = (props) => {
  const param = {
    option: props.option,
    listeners: props.listeners
  };

  return (
    <StyledLayout>
      { props.items.map(
          item => <Flake key={item.id} metadata={item} {...param} />
        )
      }
    </StyledLayout>
  );
}

Layout.propTypes = {
  items: array.isRequired
};

export default Layout;