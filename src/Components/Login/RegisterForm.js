import React from 'react'
import useForm from './../../Hooks/UseForm';
import { Input } from './../Helper/Input';
import Button from './../Helper/Button';
import styled from 'styled-components';
import { Crypto } from './../Helper/Crypto';
import { UserContext } from './../../UserContext';
import Error from './../Helper/Error';


const Container = styled.div`

  button {
    margin-top: 2rem;
  }

`;

const RegisterForm = () => {
  const username = useForm('username');
  const password = useForm('password');
  const {newUser, error} = React.useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordCrypto = Crypto(password.value, "ngCash");
    newUser(username.value, passwordCrypto);

  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Username" placeholder="Username" {...username} />
        <Input type="password" label="Password" placeholder="Password" {...password}/>
        {error && <Error error={error}/>}
        <Button> Cadastrar </Button>
      </form>
    </Container>
  )
}

export default RegisterForm;