import React from 'react';
import { Input } from './../Helper/Input';
import useForm from './../../Hooks/UseForm';
import styled from 'styled-components';
import Button from './../Helper/Button';
import { Crypto } from './../Helper/Crypto';
import { UserContext } from './../../UserContext';
import Error from './../Helper/Error';

const Container = styled.div`

  button {
    margin-top: 2rem;
  }
`;

const LoginForm = () => {
  const username = useForm(true);
  const password = useForm(true);
  const {userLogin, error} = React.useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( username.validate() && password.validate()) {
      const passwordCrypto = Crypto(password.value, "ngCash");
      userLogin(username.value, passwordCrypto);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Username" placeholder="Username" {...username} />
        <Input type="password" label="Password" placeholder="Password" {...password}/>
        {error && <Error error={error}/>}
        <Button> Entrar </Button>
      </form>
    </Container>
  )
}

export default LoginForm;