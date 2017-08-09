import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledFlake = ({option, style, order, children}) => {
  // TODO if you should apply flake specific feature, 
  // add css attribute here using 'style' props from parent
  const Wrapper = styled.div`
    position: relative;
    background-color: red;
    order: ${order};
    flex-grow: 0;
    width: ${option.size !== undefined ? option.size : 150}px;
    ${option.size === 'fitted' ? 'width: 100vw; height: 100vh;': ''}
    margin: ${option.margin !== undefined ? option.margin : 20}px;
  `;

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default StyledFlake;