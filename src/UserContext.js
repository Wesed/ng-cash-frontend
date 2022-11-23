import React from 'react'; 
import { FIND_ACCOUNT, LOGIN_POST, FIND_USER, NEW_TRANSFER, FIND_TRANSACTION, POST_TRANSACTIONS, USER_POST, ACCOUNT_POST, DELETE_ACCOUNT } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
  const [login, setLogin] = React.useState(null);
  const [data, setData] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [dataAcc, setDataAcc] = React.useState('');
  const navigate = useNavigate();
  const [token, setToken] = React.useState('');

  const newTransfer = async (value, username) => {
    console.log(value, username);
    const token = window.localStorage.getItem('token');
    try {
      // recebe o id do usuario que vai receber a transacao
      let { user } = await getAccountTransaction(username);
      const { url, options } = NEW_TRANSFER({
        token: token,
        valueTransaction: value,
        creditId: user.accountId,
        debitId: data.accountId,
        creditAccountIdId: user.accountId,
        debitAccountIdId: data.accountId
      });
      const response = await fetch(url, options);
      if (response.ok) {
        alert('Transferência feita com sucesso!');
        window.location.reload();
      }
    } catch(err) {
      setError('Ops, esse usuário não existe.');
    }
  };

  const getUser = async (token, id, idAcc) => {
    const { url, options } = FIND_USER({
      token: token,
      id: id
    });
    const resUser = await fetch(url, options);
    if (resUser.ok) {
      const jsonUser = await resUser.json();
      setData(jsonUser);
      setLogin(true);

      //recebe os dados da conta desse usuario
      const { url, options } = FIND_ACCOUNT({
        id: idAcc,
        token: token
      });
      const resAcc = await fetch(url, options);
      const jsonAcc = await resAcc.json();
      setDataAcc(jsonAcc);
    }
  };

  // essa funcao busca o ID da conta do favorecido, e diferente do metodo anterior,
  // pois esse nao traz o balance do outro cliente, como forma de sigilo
  const getAccountTransaction = async (username) => {
    //recebe os dados da conta desse usuario
    if (token) {
      console.log(username);
      const { url, options } = FIND_TRANSACTION({
        token: token,
        username: username
      });
      const resAcc = await fetch(url, options);
      const jsonAcc = await resAcc.json();
      return jsonAcc;
    }
  };

  const getTransactions = async () => {
    const { url, options } = POST_TRANSACTIONS({
      token: token,
      id: data.accountId
    });

    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  };

  const userLogin = async (username, password) => {
    const { url, options } = LOGIN_POST({
      username: username,
      password: password,
    });

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if(!response.ok) throw new Error();

      if (json) {
        console.log('Login realizado com sucesso!');
        setLogin(true);
        setData(json.user);
        let token = window.localStorage.setItem('token', json.token);
        window.localStorage.setItem('id', json.user.id);
        window.localStorage.setItem('idAcc', json.user.accountId);
        await getUser(json.token, json.user.id, json.user.accountId);
        navigate('/');
      }
    } catch(err) {
      setError('Ops! Os dados estão incorretos.');
      setLogin(false);

    }
  };

  const newUser = async (username, password) => {
    const {url, options} = ACCOUNT_POST({
      balance: "100.00"
    });

    const response = await fetch(url, options);
    const json = await response.json();

    if (response.ok) { 
      const {url, options} = USER_POST({
        username: username,
        password: password,
        accountId: json.id,
        account: json.id
      });
  
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          alert('Cadastro feito com sucesso!');
          navigate('/login');
          setError('');
        }
        if (response.status === 418) {
          setError('Ops, esse usuario já existe.');
          throw new Error('418');
        }
      } catch (err) {
        console.log(err);
        // qualquer problema que ocorrer com a criacao do usuario, deleta a ultima conta criada
        deleteAccount(json.id);
      }
  
    }
  }

  const deleteAccount = async (id) => {
    const {url, options} = DELETE_ACCOUNT({
      id: id
    });
    await fetch(url, options);
  };  

  const userLogout =  React.useCallback(async function () {
    setData(null);
    setDataAcc(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('idAcc');
    navigate('/login');
  }, [navigate]);

  React.useEffect(()=>{

    const autoLogin = async () => {
      const token = window.localStorage.getItem('token');
      setToken(token);
      const id = window.localStorage.getItem('id');
      const idAcc = window.localStorage.getItem('idAcc');
      if (token) {
          await getUser(token, id, idAcc);
      } else {
        setLogin(false);
      };
    }
    autoLogin();
  }, []);


  return (
    <UserContext.Provider value={{userLogin, userLogout, newUser, newTransfer, getTransactions, error, setError, login, setLogin, data, setData, dataAcc, setDataAcc}}>
      {children}
    </UserContext.Provider>
  )
}
