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
import { FIND_ACCOUNT } from './../../api';

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

    a {
      text-decoration: none;
      color: white;
      transition: .3s;
    }

    :hover {
      a {
        color: ${props => props.theme.colors.themeColor};
      }

      svg {
        fill: ${props => props.theme.colors.themeColor};
      }
    }
  }
`;

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.background};
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
  padding: 0 2rem 0 5rem;

  h1 {
    position: relative;
    top: 2rem;
    font-weight: 500;
  }
`;

const Transaction = styled.div`
    position: relative;
    align-self: end;
    display: flex;
    align-items: center;
    top: 4.5rem;
    right: .5rem;
    color: white;

    button {
      border-radius: 50% / 5em;
      box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
      span {
        font-size: 1.5rem;
      }
    }
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

  table {
    width: 100%;
  }
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
  opacity: 0;
  transition: .3s;

  h5 {
    position: relative;
    top: -.5rem;
    left: -1rem;
  }

  button:nth-child(1) {
    position: absolute;
    right: 0;
    top: 0rem;
    cursor: pointer;
    border: 1px solid transparent;
    background: ${props => props.theme.colors.themeColor};
    border-radius: 0 10px 0 50px;
    padding: .5rem .8rem .5rem 1rem;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    opacity: .4;

    :hover {
      opacity: .8;
    }
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

  const [visible, setVisible] = React.useState(false);
  const [filterVisible, setFilterVisibility] = React.useState(false);
  const [filterType, setFilterType] = React.useState('Entrada');
  const [dateStart, setDateStart] = React.useState('');
  const [dateEnd, setDateEnd] = React.useState('');
  const [filterOptions, setFilterOptions] = React.useState('');
  const {login, data, dataAcc, setDataAcc, token} = React.useContext(UserContext);

  // posiciona o filter container
  React.useEffect(() => {
    const filterContainer = document.querySelector("#filterContainer");
    if (filterVisible) {
      filterContainer.style.opacity = "1";
      filterContainer.style.right = "14rem";
      filterContainer.style.bottom = "1rem";
    } else {
      filterContainer.style.opacity = "0";
      filterContainer.style.right = "0";
      filterContainer.style.bottom = "-18rem";
    }
  }, [filterVisible]);

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
        'type': filterType,
        'start': dateStart.split('-').reverse().join('/'),
        'end': dateEnd.split('-').reverse().join('/')
      }); 
    } else {
      alert('Ops! A data de início não pode ser maior ou igual a data de término.');
    }
  };

  //recebe os dados da conta
  // React.useEffect(() => {
  //   console.log(data);
  //   const getAccount = async () => {
  //     const { url, options } = FIND_ACCOUNT({
  //       id: data.accountId,
  //       token: token
  //     });
  //     const response = await fetch(url, options);
  //     const json = await response.json();
  //     setDataAcc(json);
  //     console.log('bb', json);
  //   };
  //   getAccount();
  // }, [data.accountId, token, setDataAcc, data]);

  return <>
    <Header> 
      <Logo />
      <div>
        <Logout /> 
        <a href="/login"> Logout </a>
      </div>
    </Header>

    <Container>
      {/* <MenuSidebar>
        <HeaderSidebar></HeaderSidebar>
      </MenuSidebar> */}

      <InfoMenu>
        <h1> Olá, @{data.username}!</h1>

        <Transaction>
          {/* <TransactionIcon/> */}
          <Button className="transaction-button">
            <span> + </span>
            Transferência
          </Button>
        </Transaction>

        <Balance>
          <div>
            <div>
              <p> Saldo atual</p>
              <button onClick={()=>{setVisible(!visible)}}> 
                {visible ? <Eye/> : <EyeOff/>}
              </button>
            </div>
            {visible ? <h3> R${dataAcc.balance}</h3> : <h3> *********</h3>}
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
              <button onClick={()=>{setFilterVisibility(false)}}> X </button>
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
          <Table filter={filterOptions} />
        </TableTransactions>

      </InfoMenu>

    </Container>
  </>
}

export default Dashboard;