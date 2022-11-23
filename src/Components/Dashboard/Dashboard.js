import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from "../../Assets/logo.svg";
import {ReactComponent as Logout} from "../../Assets/logout.svg";
import {ReactComponent as Filter} from "../../Assets/filter.svg";
import {ReactComponent as Dollar} from "../../Assets/dollar.svg";
import {ReactComponent as Eye} from "../../Assets/eye.svg";
import {ReactComponent as EyeOff} from "../../Assets/eye-off.svg";
import {ReactComponent as TransactionIcon} from "../../Assets/transaction.svg";
import Table from './Table';
import Button from './../Helper/Button';
import { UserContext } from './../../UserContext';
import { Input } from './../Helper/Input';
import useForm from './../../Hooks/UseForm';
import ButtonClose from './../Helper/ButtonClose';
import Error from './../Helper/Error';
import UseMedia from './../../Hooks/UseMedia';

const Header = styled.div`
  background: #111;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 5rem;

  svg {
    max-width: 10rem;
    max-height: 3rem;
  }

  div {
    display: flex;
    gap: .5rem;
    cursor: pointer;
    
    svg {
      width: 16px;
      fill: white;
      transition: .3s;
    }

    button {
      border: 1px solid transparent;
      background: transparent;
      color: white;
      transition: .3s;
    }

    :hover {
      button {
        color: ${props => props.theme.colors.themeColor};
        pointer-events: none;
      }

      svg {
        fill: ${props => props.theme.colors.themeColor};
        pointer-events: none;
      }
    }
  }

  @media (max-width: 30rem) {
    padding: .5rem 0;
    justify-content: space-around;
  }
`;

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.grayBackground};
  display: grid;
  grid-template-columns: 1fr;

  h1 {
    /* font-size: 1.25rem; */
    color: rgba(0, 0, 0, 0.8);
  }
`;

const InfoMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem 5rem 5rem;

  h1 {
    position: relative;
    top: 2rem;
    font-weight: 500;
  }

  @media (max-width: 30rem) {
    width: 90%;
    padding: 0 1rem 2rem 1rem;
  }
`;

const TransactionButton = styled.div`
    position: relative;
    align-self: end;
    display: flex;
    align-items: center;
    top: 4.5rem;
    right: .5rem;
    color: white;

    p {
      display: inline;
    }

    button {
      border-radius: 50% / 5em;
      box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
      span {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 30rem) {
      top: -2rem;

      svg {
        path {
          stroke: white;
        }
      }

      button {
        border-radius: 50%;
      }
    }
`;

const Transaction = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  top: 0; right: 0; bottom: 0; left: 0;
  width: 100vw;
  height: 100%;
`;

const TransactionContainer = styled.div`
  position: relative;
  z-index: 999;
  background: white;
  width: 500px;
  /* height: 300px; */
  border-radius: 10px;
  box-shadow: 2px 0 15px 5px rgba(0, 0, 0, .2);
  padding: 2rem;

  h2 {
    color: rgba(0, 0, 0, .87);
    font-weight: 500;
    margin-top: -1rem;
  }

  input:first-of-type {
    border-bottom: 2px solid ${props=>props.theme.colors.darkGray}; 
    color: rgba(0, 0, 0, .87);
    font-size: 1.5rem;

    :hover,
    :focus {
      border-bottom: 2px solid black;
      outline: none;
    }
  }

  .transferUser {
    font-size: 1rem !important;
  }

  @media (max-width: 30rem) {
    width: 70%;
  }

`;

const TransactionBackground = styled.div`
  position: fixed;
  z-index: 998;
  top: 0; right: 0; bottom: 0; left: 0;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

const Balance = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  width: 250px;
  background: white;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  margin-bottom: 2rem;

  div {
    div {
      display: flex;
      gap: .5rem;
      align-items: center;

      button {
        background: transparent;
        border: 1px solid transparent;
        padding: 0;
        height: min-content;
        margin-top: .2rem;
        cursor: pointer;
        
        svg {
          width: 16px;
          height: min-content;
          opacity: 1;
          fill: none;
          
          path {
            stroke: rgba(0, 0, 0, 0.54);
          }

          :hover {
            path {
              stroke: rgba(0, 0, 0, 1);
            }
          }
        }
      }
    }
  }

  p {
    color: rgba(0, 0, 0, 0.54);
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
    margin-top: -0.6rem;
  }

  svg {
    width: 36px;
    opacity: .4;
    fill: ${props => props.theme.colors.themeColor};
  }
`;

const TableTransactions = styled.div`
  max-height: 100%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 5px 1px rgba(1, 1, 1, 0.1);
  margin: 0 -1rem 0 0;
`;

const HeaderTable = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;

  h3 {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);

    :nth-child(2) {
      color: ${props => props.theme.colors.themeColor};
      font-weight: 700;
    }
  }

  @media (max-width: 30rem) {
    justify-content: space-around;
    padding: 1rem 0;
  }
`;

const FilterIcon = styled.button`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .8rem;
    background: transparent;
    border: 1px solid transparent;
    outline: none;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    cursor: pointer;
    transition: .3s;
    

    :hover {
      background: rgba(116, 49, 244, 0.4);

      path {
        stroke: white;
        stroke-width: 2.5px;
      }
    }

    svg {
      width: 20px;
      height: 20px;
    }
`;

const FilterContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  background: white;
  border-radius: 10px;
  width: 250px;
  right: 0;
  bottom: -7rem;
  opacity: 1;
  transition: .3s;

  h5 {
    position: relative;
    top: -.5rem;
    left: -1rem;
  }

  button:last-child {
    width: 80%;
    padding: .8rem;
    margin-bottom: 1rem;
  }

  select {
    width: 80%;
    padding: .5rem;
    border: transparent;
    border-bottom: 1px solid rgba(0, 0, 0, 0.54);
    outline: none;
    margin-bottom: 1rem;
  }
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  width: 100%;
  margin-bottom: 1rem;

  * {
    margin-left: .5rem;
    margin-top: .3rem;
  }

  span {
    font-size: .75rem;
    color: ${props => props.theme.colors.themeColor};
    opacity: .87;
    margin-bottom: -.6rem;
  }

  input[type="date"] {
        width: calc(100% - 3rem);
        border: 1px solid transparent;
        border-bottom: 1px solid rgba(0, 0, 0, 0.54);
        padding: .5rem;
        outline: none;
  };

  input[type="date"]::-webkit-calendar-picker-indicator {
  width: 100%;
  position: absolute;
  background: transparent;
}

  span {
    display: block;
  }

  label {
    display: block;
    border-bottom: 1px solid red;
  }
`;

const Dashboard = () => {
  const valueTransfer = useForm(true);
  const userCredit = useForm(true);
  const media = UseMedia('(max-width: 30rem)');

  const [visible, setVisible] = React.useState(false);
  const [filterVisible, setFilterVisibility] = React.useState(false);
  const [transferVisible, setTransferVisibility] = React.useState(false);
  const [filterType, setFilterType] = React.useState('Entrada');
  const [dateStart, setDateStart] = React.useState('');
  const [dateEnd, setDateEnd] = React.useState('');
  const [filterOptions, setFilterOptions] = React.useState('');
  const {data, error, userLogout, setError, newTransfer} = React.useContext(UserContext);

  // posiciona o filter container
  React.useEffect(() => {
    const filterContainer = document.querySelector("#filterContainer");
    if (filterVisible) {
      filterContainer.style.opacity = "1";
      filterContainer.style.right = `${media ? "4rem" : "14rem"}`;
      filterContainer.style.bottom = "1rem";
    } else {
      filterContainer.style.opacity = "0";
      filterContainer.style.right = "0";
      filterContainer.style.bottom = "-18rem";
    }

  }, [filterVisible, media]);

  //seta as datas do primeiro e ultimo dia do mes atual
  React.useEffect(() => {
    var date = new Date();

    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toLocaleDateString();
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toLocaleDateString();

    setDateStart(firstDay.split('/').reverse().join('-'));
    setDateEnd(lastDay.split('/').reverse().join('-'));
  }, []);

  const handleClick = () => {
    if (dateStart < dateEnd) {
      setFilterOptions({
        type: filterType,
        start: dateStart.split('-').reverse().join('/'),
        end: dateEnd.split('-').reverse().join('/')
      }); 
    } else {
      alert('Ops! A data de início não pode ser maior ou igual a data de término.');
    }
  };

  const handleTransfer = () => {
    
    const transferValue = +parseFloat(valueTransfer.value.replace(',', '.')).toFixed(2);
    // const balanceValue = +parseFloat(dataAcc.balance).toFixed(2);
    let balanceValue = 0;
    if (visible) {
      balanceValue = parseFloat((document.querySelector('#balance').innerHTML).substring(2))

      if (transferValue>0 && transferValue <= balanceValue) {
        if(userCredit.value !== data.username) {
          console.log(userCredit.value, data.username);
          newTransfer(valueTransfer.value, userCredit.value);
          setError('');
        } else {
          setError('Você não pode fazer uma transferência pra si mesmo.');
        }
      } else if(transferValue<=0 ) {
        setError('Ops, o saldo precisa ser maior que 1.');
      } 
        else {
          setError('Ops, seu saldo é menor que o valor da transação.');
        }
    }

  };

  return <>
    <Header> 
      <Logo />
      <div onClick={userLogout}>
        <Logout /> 
        <button> Logout </button>
      </div>
    </Header>

    <Container>

      <InfoMenu>
        <h1> Olá, @{data.username}!</h1>

        <TransactionButton>
          <Button className="transaction-button" onClick={()=>{setTransferVisibility(true)}}>
            {
              media ?
              <TransactionIcon />
              :
              <p> <span> + </span> Transferência </p>
            }
          </Button>
        </TransactionButton>

        {
          transferVisible &&
          <Transaction>
            <TransactionContainer>
              <ButtonClose onClick={()=>{setTransferVisibility(false)}}> X </ButtonClose>
              <h2> Nova transferência </h2>
              <Input type="number" value={valueTransfer} placeholder="R$" {...valueTransfer}/>
              <div>
                <Input value={userCredit} className="transferUser" placeholder="Username de origem (quem vai receber)" {...userCredit}/>
              </div>
              {error && <Error error={error} />}
              <Button onMouseDown={()=>{setVisible(true)}} onClick={handleTransfer}> Transferir </Button>
            </TransactionContainer>
          <TransactionBackground />
        </Transaction>
        }

        <Balance>
          <div>
            <div>
              <p> Saldo atual</p>
              <button onClick={()=>{setVisible(!visible)}}> 
                {visible ? <Eye/> : <EyeOff/>}
              </button>
            </div>
            {visible ? <h3 id="balance"> 0 </h3> : <h3> *********</h3>}
          </div>
          <Dollar />
        </Balance>

        <TableTransactions>
          <HeaderTable>
            <h3> Transações </h3>
            <h3> Novembro </h3>
            <FilterIcon onClick={()=>{setFilterVisibility(true)}}>
              <Filter />
            </FilterIcon>

            <FilterContainer id="filterContainer">
              <ButtonClose onClick={()=>{setFilterVisibility(false)}}> X </ButtonClose>
              <h5> Selecione o filtro: </h5>
              <select name="selectFilter" id="filterSelect" onChange={(e)=>{setFilterType(e.target.value)}}>
                <option value="Entrada"> Entradas </option>
                <option value="Saida"> Saidas </option>
              </select>

              <DataContainer>
              <div>
                <span> De </span>
                <input value={dateStart} type="date" id="start" name="startDate" onChange={(e)=>{setDateStart(e.target.value)}}
                />
              </div>

              <div>
                <span> Até </span>
                <input value={dateEnd} type="date" id="end" name="endtDate" onChange={(e)=>{setDateEnd(e.target.value)}}
                />
              </div>
              </DataContainer>

              <Button onClick={handleClick}> Filtrar </Button>

            </FilterContainer>
          </HeaderTable>
          <Table visible={visible} filter={filterOptions} />
        </TableTransactions>

      </InfoMenu>

    </Container>
  </>
}

export default Dashboard;