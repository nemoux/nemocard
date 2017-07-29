import React from 'react';
import styled from 'styled-components';

const StyledLayout = (props) => {
  const Wrapper = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
  `;

  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default StyledLayout;