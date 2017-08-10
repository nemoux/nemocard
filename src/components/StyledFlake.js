import React from 'react';
import styled from 'styled-components';

const StyledFlake = ({option, style, order, children}) => {
  // TODO if you should apply flake specific feature, 
  // add css attribute here using 'style' props from parent

  // TODO if styled component is used for Flake, dragging event is not fired in react dnd.
  // For a while, we use workaround way to avoid it. 
  /*
  const Wrapper = styled.div`
    position: relative;
    background-color: red;
    order: ${order};
    flex-grow: 0;
    width: ${option.size !== undefined ? option.size : 150}px;
    ${option.size === 'fitted' ? 'width: 100vw; height: 100vh;': ''}
    margin: ${option.margin !== undefined ? option.margin : 20}px;
  `;
  */

  let flexItemStyle = {
    position: 'relative',
    backgroundColor: 'red',
    order: order,
    flexGrow: 0,
    width: `${option.size !== undefined ? option.size : 150}px`,
    margin: `${option.margin !== undefined ? option.margin : 20}px`
  }

  if (option.size === 'fitted') {
    flexItemStyle.width = '100vw';
    flexItemStyle.height = '100vh';
  }

  return (
    <div style={flexItemStyle}>
      {children}
    </div>
  );
}

export default StyledFlake;