import React from 'react';
import { Input } from './../Helper/Input';
import useForm from './../../Hooks/UseForm';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './../Helper/Button';


const Container = styled.div`

  button {
    margin-top: 2rem;
  }
`;

const LoginForm = () => {
  const username = useForm(true);
  const password = useForm(true);

  return (
    <Container>
      <form>
        <Input type="text" label="Username" placeholder="Username" {...username} />
        <Input type="password" label="Password" placeholder="Password" {...password}/>
        <Button> Entrar </Button>
      </form>
    </Container>
  )
}

export default LoginForm;