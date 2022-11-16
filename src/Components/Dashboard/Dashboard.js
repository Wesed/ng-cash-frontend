import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from "../../Assets/logo.svg";
import {ReactComponent as Logout} from "../../Assets/logout.svg";
import {ReactComponent as Filter} from "../../Assets/filter.svg";
import {ReactComponent as Dollar} from "../../Assets/dollar.svg";
import {ReactComponent as Eye} from "../../Assets/eye.svg";
import {ReactComponent as EyeOff} from "../../Assets/eye-off.svg";
import Table from './Table';
import Button from './../Helper/Button';

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
  grid-template-columns: 15% 85%;

  h1 {
    /* font-size: 1.25rem; */
    color: rgba(0, 0, 0, 0.8);
  }
`;

const MenuSidebar = styled.div`
  background: white;
  height: 100%;
`;

const InfoMenu = styled.div`
  padding: 1rem 2rem;

  h1 {
    font-weight: 500;
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

const Transactions = styled.div`
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
        /* opacity: 1;
        position: absolute; */
        width: calc(100% - 3rem);
        border: 1px solid transparent;
        border-bottom: 1px solid rgba(0, 0, 0, 0.54);
        padding: .5rem;
        outline: none;
  };

  input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    color: transparent;
    background: transparent;
}


input[type="date"]::-webkit-inner-spin-button {
    z-index: 1;
}


 input[type="date"]::-webkit-clear-button {
     z-index: 1;
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
  const [filterVisible, setFilter] = React.useState(false);

  React.useEffect(() => {
    const filterContainer = document.querySelector("#filterContainer");
    if (filterVisible) {
      filterContainer.style.opacity = "1";
      filterContainer.style.right = "7rem";
      filterContainer.style.bottom = "1rem";
    } else {
      filterContainer.style.opacity = "0";
      filterContainer.style.right = "0";
      filterContainer.style.bottom = "-18rem";
    }
  }, [filterVisible]);

  return <>
    <Header> 
      <Logo />
      <div>
        <Logout /> 
        <a href="/login"> Logout </a>
      </div>
    </Header>

    <Container>
      <MenuSidebar>
        {/* <HeaderSidebar></HeaderSidebar> */}
      </MenuSidebar>

      <InfoMenu>
        <h1> Olá, @Wesed!</h1>

        <Balance>
          <div>
            <div>
              <p> Saldo atual</p>
              <button onClick={()=>{setVisible(!visible)}}> 
                {visible ? <Eye/> : <EyeOff/>}
              </button>
            </div>
            {visible ? <h3> R$ 100,00</h3> : <h3> *********</h3>}
          </div>
          <Dollar />
        </Balance>

        <Transactions>
          <HeaderTable>
            <h3> Transações </h3>
            <h3> Novembro </h3>
            <FilterIcon onClick={()=>{setFilter(true)}}>
              <Filter />
            </FilterIcon>

            <FilterContainer id="filterContainer">
              <button onClick={()=>{setFilter(false)}}> X </button>
              <h5> Selecione o filtro: </h5>
              <select name="selectFilter" id="filterSelect">
                <option value="Entradas"> Entradas </option>
                <option value="Saidas"> Saidas </option>
              </select>

              <DataContainer>
              <div>
                <span> De </span>
                <input type="date" id="start" name="startDate" 
                value="2022-11-01"/>
              </div>

              <div>
                <span> Até </span>
                <input type="date" id="end" name="endtDate" value="2022-11-30"/>
              </div>
              </DataContainer>

              <Button> Filtrar </Button>

            </FilterContainer>
          </HeaderTable>
          <Table />
        </Transactions>

      </InfoMenu>

    </Container>
  </>
}

export default Dashboard;