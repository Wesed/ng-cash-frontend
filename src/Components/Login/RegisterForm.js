import React from 'react'
import useForm from './../../Hooks/UseForm';
import { Input } from './../Helper/Input';
import Button from './../Helper/Button';
import styled from 'styled-components';


const Container = styled.div`

  button {
    margin-top: 2rem;
  }
`;

const RegisterForm = () => {
  const username = useForm('username');
  const password = useForm('password');

  return (
    <Container>
      <form>
        <Input type="text" label="Seu username" placeholder="Seu username" {...username} />
        <Input type="password" label="Senha" placeholder="Senha" {...password}/>
        <Button> Cadastrar </Button>
      </form>
    </Container>
  )
}

export default RegisterForm;