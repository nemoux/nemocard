import React from 'react';
import CardsBackground from '../containers/CardsBackground';
import CardsLayout from '../containers/CardsLayout';
import { Interactable } from './Interactable';

const App = () => {
  return (
    <div>
      <CardsBackground />
      <CardsLayout />
    </div>
  );
};

export default Interactable(App, 'touch');