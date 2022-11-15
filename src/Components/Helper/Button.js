import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background: red;
  width: 100%;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  border: none;
  background: ${props => props.theme.colors.themeColor};
  opacity: .7;
  transition: ease-in .1s;
  border-radius: 50px;

  :hover {
    opacity: 1;
  }

`;

const Button = ({children, ...props}) => {

  /* 
    o botao sempre vai ter uma acao, porem sempre tera um evento no onclick
  */

  return <Btn {...props}> {children} </Btn>;
}

export default Button;