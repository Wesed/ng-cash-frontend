import React from 'react';
import { useTable } from 'react-table'

const Table = () => {
  const data = React.useMemo( () => [
      {
        date: '15/11/2022',
        description: 'Transferência',
        type: 'Entrada',
        value: 'R$ 100,00',
      },
      {
        date: '01/11/2022',
        description: 'Transferência',
        type: 'Saída',
        value: 'R$ 150,00',
      },
      {
        date: '12/11/2022',
        description: 'Transferência',
        type: 'Entrada',
        value: 'R$ 200,00',
      },
      {
        date: '15/11/2022',
        description: 'Transferência',
        type: 'Entrada',
        value: 'R$ 100,00',
      },
      {
        date: '01/11/2022',
        description: 'Transferência',
        type: 'Saída',
        value: 'R$ 150,00',
      },
      {
        date: '12/11/2022',
        description: 'Transferência',
        type: 'Entrada',
        value: 'R$ 200,00',
      },
    ],
  []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Data',
        accessor: 'date',
      },
      {
        Header: 'Descrição',
        accessor: 'description',
      },
      {
        Header: 'Tipo',
        accessor: 'type',
      },
      {
        Header: 'Valor',
        accessor: 'value',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  console.log(rows);

  // mudar a cor p/ entrada e saida
  React.useEffect(()=>{
    let table = document.querySelector('#table').rows;
    for (let i = 1; i < table.length; i++) {
      // console.log(table[i].children[2].innerText);
      if (table[i].children[2].innerText === 'Entrada') {
        table[i].children[3].style.color = 'green';
      } else {
        table[i].children[3].style.color = 'red';
      }
    }
  }, []);

  // controle dos filtros
  React.useEffect(()=> {

  }, []);


  return (
    <table {...getTableProps()} id="table">
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                  background: '#f1f2f2',
                  color: 'rgba(0, 0, 0, 0.54)',
                  fontWeight: '700',
                  padding: '10px',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       background: 'white',
                       borderBottom: '1px solid #f1f2f2',
                       color: 'rgba(0, 0, 0, 0.87)',
                       textAlign: 'center',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
  )
}

export default Table;