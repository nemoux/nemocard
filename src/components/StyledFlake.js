import React from 'react';
import styled from 'styled-components';

const StyledFlake = (props) => {
  const Wrapper = styled.div`
    position: fixed;
    left: ${props.style.position.x}px;
    top: ${props.style.position.y}px;
    z-index: ${props.style.position.z};
    opacity: ${props.style.opacity};
    width: ${props.style.size.width}px;
    height: ${props.style.size.height}px;
    transform: scale(${props.style.scale.x}, ${props.style.scale.y}) rotate(${props.style.rotation}deg);
    `;

  const children = props.children.map((child, index) => 
    <Wrapper key={ index }>
      {child}
    </Wrapper>
  );

  return (
    <div> {children} </div>
  )
}

export default StyledFlake;