import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0rem;
  cursor: pointer;
  border: 1px solid transparent;
  background: ${(props) => props.theme.colors.themeColor};
  border-radius: 0 10px 0 50px;
  padding: 0.5rem 0.8rem 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  opacity: 0.4;

  :hover {
    opacity: 0.8;
  }
`;

const ButtonClose = ({children, ...props}) => {
  return <Button {...props}> {children} </Button>
}

export default ButtonClose;