import React from 'react'
import useForm from './../../Hooks/UseForm';
import { Input } from './../Helper/Input';
import Button from './../Helper/Button';
import styled from 'styled-components';
import { ACCOUNT_POST, USER_POST } from '../../api';
import { Crypto } from './../Helper/Crypto';
import { UserContext } from './../../UserContext';


const Container = styled.div`

  button {
    margin-top: 2rem;
  }

`;

const RegisterForm = () => {
  const username = useForm('username');
  const password = useForm('password');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {url, options} = ACCOUNT_POST({
      balance: "100.00"
    });

    const response = await fetch(url, options);
    const json = await response.json();

    if (response.ok) { 
      const passwordCrypto = Crypto(password.value, "ngCash");
      const {url, options} = USER_POST({
        username: username.value,
        password: passwordCrypto,
        accountId: json.id,
        account: json.id
      });
  
      try {
        const response = await fetch(url, options);
        if (response.ok) console.log('Cadastro feito com sucesso!');
        if (response.status === 418) username.setError('Ops, esse usuario já existe.');
      } catch (err) {
        console.log(err);
      }
  
    }

  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Username" placeholder="Username" {...username} />
        <Input type="password" label="Password" placeholder="Password" {...password}/>
        <Button> Cadastrar </Button>
      </form>
    </Container>
  )
}

export default RegisterForm;