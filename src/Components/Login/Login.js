import React from 'react'
import { Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotForm from './ForgotForm';
import { Route } from 'react-router-dom';
import styled from "styled-components";
import backgroundLogin from "../../Assets/background.svg";
import { useParams, useNavigate } from 'react-router-dom';

const Container = styled.section`
  background: #111;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 50%);

  @media (max-width: 30rem) {
    margin: 2rem auto;
    max-width: 100%;
  }
`;

const BackgroundLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

  img {
    position: relative;
    opacity: .9;
    width: 450px;
    object-fit: cover;
  }

  :after {
      /* content: ''; */
      position: relative;
      left: 7rem;
      width: 3px;
      height: 20%;
      background: ${props => props.theme.colors.themeColor};
      color: white;
      opacity: .8;
    }
`;

const InfoLogin = styled.div`
  padding: 6rem 8rem;
`;

const Option = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;

  span {
    pointer-events: none;
  }

  button {
    color: #eee;
    border: 2px solid transparent;
    padding: 1rem 3rem;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    background: transparent;

    :hover {
      border-bottom: 2px solid ${props=>props.theme.colors.themeColor};
    }

    :target {
      border-bottom: 2px solid ${props=>props.theme.colors.themeColor};
    }

  }
  .active {
    border-bottom: 2px solid ${props=>props.theme.colors.themeColor};
  }
`;

const FormField = styled.div`
  margin-top: 5rem;
`;

const Login = () => {
  const navigate = useNavigate(); 

  const handleClick = ({target})  => {
    let buttons = document.querySelectorAll('button');

    buttons.forEach(e => {
      e.classList.remove('active');
    });

    target.classList.add('active');
  };


  return (
    <Container>
      <BackgroundLogin>
        <img src={backgroundLogin} alt="Background login" />
      </BackgroundLogin>

      <InfoLogin>
          <Option onClick={handleClick}>
            <button className="active" onClick={()=>{navigate('/login')}}>  
              <span> Entrar </span>
            </button>
            <button onClick={()=>{navigate('/login/register')}}>  
              <span> Cadastrar </span>
            </button>
          </Option>
          
          <FormField>
            <Routes>
              <Route path="/" element={<LoginForm />}></Route>
              <Route path="register" element={<RegisterForm />}></Route>
              <Route path="forgot" element={<ForgotForm />}></Route>
            </Routes>
          </FormField>

      </InfoLogin>

    </Container>
  );
}

export default Login;