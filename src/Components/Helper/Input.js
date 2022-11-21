import React from 'react';
import styled from 'styled-components';

const InputField = styled.div`
  color: white;
  width: 100%;
  margin: 2rem 0;

  label {
    position: relative;
    bottom: -2rem;
    font-size: 14px;
    color: #eee;
    opacity: 0;
    transition: .3s;
  }

  input {
    width: 100%;
    height: 20px;
    background: transparent;
    border: 1px solid transparent;
    border-bottom: 2px solid rgba(255, 255, 255, .6);
    font-size: .875rem;
    color: white;
    padding: .5rem 0;

    :hover,
    :focus {
      border-bottom: 2px solid rgba(255, 255, 255, 1);
      outline: none;
    }
  }

  :hover,
  :focus {
    label {
      bottom: .5rem;
        opacity: 1;
      }
  }
`;

const Error = styled.p`
    position: relative;
    color: rgba(255, 0, 0, .8);
    font-size: 12px;

    @media (max-width: 30rem) {
      position: absolute;
      top: 4.5rem;
    }
`;


export const Input = ({type, name, label, placeholder, value, onChange, onBlur, error, className}) => {


  return (
    <InputField>
      <label> {label} </label>
      <input name={name} 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange}
        onBlur={onBlur}
        minLength={3}
        className={className}
        >
      </input>

      { error && <Error> {error} </Error> }

    </InputField>
  )
}