import React from 'react';
import { UserContext } from './../../UserContext';
import styled from 'styled-components';

const TableContainer = styled.table`
  width: 100%;
  text-align: center;

  .header {
    background: ${props => props.theme.colors.tableHeader};
    // simula o padding
    line-height: 3rem;

    th {
      color: rgba(0, 0, 0, 0.8)
    }
  }

  td {
  padding-top:1rem;
  padding-bottom:1rem;
  padding-right:1rem;  
  border-bottom: 1px solid ${props => props.theme.colors.border}; 
}

  .header {
    padding: 1rem;
  }
`;

const Empty = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  color: rgba(0, 0, 0, .54);
  padding: 1rem;
`;

const Table = ({visible, filter}) => {
  const {getTransactions, data, dataAcc } = React.useContext(UserContext);
  const [dataTable, setData] = React.useState('')
  const [dataItems, setDataItems] = React.useState([]);
  const [isEmpty, setEmpty] = React.useState(true);


  React.useEffect(()=>{

    const getData = async () => {
      const dataT = await getTransactions();
      setData(dataT);
    };
    getData();

  }, [getTransactions]);

  // seta os dados do banco no state dataItems
  React.useEffect(()=>{
    if (dataTable) {
      let dataItems = [];
      for (let i = 0; i < dataTable.transactions.length; i++) {
        // console.log(i);
        dataItems.push({
          date: dataTable.transactions[i].createdAt.substring(0,10).split('-').reverse().join('/'),
          description: 'Transferência',
          type: `${dataTable.transactions[i].creditId === data.accountId ? 'Entrada' : 'Saida'}`,
          value: dataTable.transactions[i].valueTransaction    
        })
    }
    // let json = JSON.stringify(dataItems);
    setDataItems(dataItems);
  } 
  }, [dataTable, data]);


  // mudar a cor p/ entrada e saida
  React.useEffect(() => {
    if (dataTable) {
      dataTable.transactions.length > 0 && setEmpty(false);
      let table = document.querySelector("#table").rows;
      if(table.length === 1 ) {
        let tableContainer = document.querySelector("#table");

      }
      for (let i = 1; i < table.length; i++) {
        // console.log(table[i].children[2].innerText);
        if (table[i].children[2].innerText === "Entrada") {
          table[i].children[3].style.color = "green";
        } else {
          table[i].children[3].style.color = "red";
        }
      }
    }
  }, [dataTable]);

  // controle dos filtros
  React.useEffect(()=> {
    if (filter) {
      let table = document.querySelector('#table').rows;

      for (let i = 1; i < table.length; i++) {      
          if (!(table[i].children[0].innerText >= filter.start && table[i].children[0].innerText <= filter.end)) {
                table[i].style.opacity = 0;
                table[i].style.position = 'absolute';
            }
        else {
          table[i].style.opacity = 1;
          table[i].style.position = 'relative';
        }   
      }

      /* primeiro filtra pela data, depois filtra os valores que sobraram novamente */

      for (let i = 1; i < table.length; i++) {  
        if (table[i].style.position === 'relative') {
          if (table[i].children[2].innerText !== filter.type ) {
            table[i].style.opacity = 0;
            table[i].style.position = 'absolute';
          } else {
            table[i].style.opacity = 1;
            table[i].style.position = 'relative';
          }
        }
    }

    }
  }, [filter]);

  // seta os debitos e creditos nos estados, afim de saber o balance atual
  React.useEffect(()=>{
    if (dataItems) {
      let credit = parseFloat(dataAcc.balance);
      let debit = 0;
      for (let i = 0; i < dataItems.length; i++) {
        if (dataItems[i].type === 'Entrada') {
          credit +=  +parseFloat(dataItems[i].value);
        } else {
          debit = debit + +parseFloat(dataItems[i].value);
        }
      }
      let balance = +parseFloat(credit - debit).toFixed(2);
      if (visible) document.querySelector('#balance').innerHTML = `R$${balance}`;
    }


  }, [dataItems, dataAcc, visible]);


  if (dataTable)
  return <>
      <TableContainer id="table">
        <thead className="header">
          <tr>
            <th> Data </th>
            <th> Descrição </th>
            <th> Tipo </th>
            <th> Valor </th>
          </tr>
        </thead>
        <tbody>
          {dataItems?.map((item, index) => 
            <tr key={index}>
              <td> {item.date} </td>
              <td> {item.description} </td>
              <td> {item.type} </td>
              <td> R$ {item.value} </td>
            </tr>
          )}

        </tbody>  
      </TableContainer>

      {isEmpty &&
        <Empty> Ops, ainda não possui nenhuma transação. </Empty>
      }
    </>

    return <></>
}
export default Table;