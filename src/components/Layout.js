import React from 'react';
import { array } from 'prop-types';
import CardsOne from '../containers/CardsOne';
import StyledLayout from './StyledLayout';

const Layout = (props) => {
  const cardsOnes = props.items.map(item => 
    <CardsOne key={item.id} metadata={item} />
  );

  return (
    <StyledLayout>
      {cardsOnes}
    </StyledLayout>
  );
}

Layout.propTypes = {
  items: array.isRequired
};

export default Layout;