import React from 'react';
import { Input } from './../Helper/Input';
import useForm from './../../Hooks/UseForm';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from './../Helper/Button';
import { LOGIN_POST } from './../../api';
import { Crypto } from './../Helper/Crypto';
import { UserContext } from './../../UserContext';


const Container = styled.div`

  button {
    margin-top: 2rem;
  }
`;

const LoginForm = () => {
  const username = useForm(true);
  const password = useForm(true);
  const navigate = useNavigate();
  const {login, setLogin, setData, setToken} = React.useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( username.validate() && password.validate()) {
      const passwordCrypto = Crypto(password.value, "ngCash");
      const { url, options } = LOGIN_POST({
        username: username.value,
        password: passwordCrypto,
      });

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if (json) {
          console.log('Login realizado com sucesso!');
          setLogin(true);
          setData(json.user);
          setToken(json.token);
          navigate('/');
        }
      } catch(err) {
        username.setError('Ops, os dados estão incorretos.');
    }

    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Username" placeholder="Username" {...username} />
        <Input type="password" label="Password" placeholder="Password" {...password}/>
        <Button> Entrar </Button>
      </form>
    </Container>
  )
}

export default LoginForm;