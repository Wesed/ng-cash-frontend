import React from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    message: 'Preencha um email válido',
  },
  password: {
    regex:/(?=^.{8,}$)(?=.{0,}[A-Z])(?=.{0,}[a-z])(?=.{0,}\W)(?=.{0,}\d)/g,
    message: 'A senha precisa ter caracteres maísculos, minúsculos, números e caracteres especiais!. Com no mínimo 8 caracteres.'
  },
  number: {
    regex: /^\d+$/,
    message: 'Somente números'
  }
}

const useForm = (type) => {

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  function validate(value) {  
    console.log(value);
    // se passar 'false' no campo, significa q nao e pra validar
    if(type === false) return true;
    // se o campo estiver vazio
    if(value.length === 0) {
      setError('O campo está vazio.');
      return false;
      // se type existir no const 'types' E NAO tiver um regex valido (seguindo as regras)
    } else if(types[type] && !types[type].regex.test(value)) {
      // exibe o erro setado em 'message'
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({target}) {
    // . toda vez q o onChange ativar, ira validar;
    // . pra evitar que ja inicie com erro, so vai validar SE ja houver algum erro;
    // . quando for preenchido corretamente, o erro some
    if (error) validate(target.value);
    setValue(target.value);
  } 

  return {
    value, 
    setValue,
    onChange,
    error,
    setError,
    // qd for chamado, ja passa o value do elemento q o chamou
    validate: () => validate(value),
    // ao passar pro prox campo, ou perder o foco, ativa a validacao
    onBlur: () => validate(value),
  };
}

export default useForm;