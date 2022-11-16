import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from "../../Assets/logo.svg";
import {ReactComponent as Logout} from "../../Assets/logout.svg";
import {ReactComponent as Filter} from "../../Assets/filter.svg";
import Table from './Table';

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
  height: 100vh;
  background: ${props => props.theme.colors.background};
  display: grid;
  grid-template-columns: 15% 85%;

  h1 {
    font-size: 2rem;
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

const Transactions = styled.div`
  height: 100%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 5px 1px rgba(1, 1, 1, 0.1);

  table {
    width: 100%;
  }
`;

const HeaderTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;

  h2 {
    font-weight: 500;
  }

  div {
    border-radius: 50%;
    padding: 1rem;
    width: 16px;
    height: 16px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

    svg {
      stroke: red;
    }
  }
`;

const Dashboard = () => {
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

        <Transactions>
          <HeaderTable>
            <h2> Transações </h2>
            <div>
              <Filter />
            </div>
          </HeaderTable>
          <Table />
        </Transactions>

      </InfoMenu>

    </Container>
  </>
}

export default Dashboard;