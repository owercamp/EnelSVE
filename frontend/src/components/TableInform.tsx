import React, { FC, useState } from 'react'
import DataTable, { Alignment, createTheme } from 'react-data-table-component'
import { ITable } from '../../interfaces/interfaces';



const TableInform: FC<ITable> = ({ dataTable, filterToRow }) => {
  const [filterText, setFilterText] = useState('');

  const columns = [
    {
      name: 'Central',
      selector: (row: any) => row.title,
      sortable: true,
      grow: 10,
      center: true,
      compact: true,
      wrap: true
    },
    {
      name: `${new Date().getFullYear()}`,
      selector: (row: any) => row.yearNew,
      sortable: true,
      grow: 4,
      center: true,
      compact: true
    },
    {
      name: `${new Date().getFullYear() - 1}`,
      selector: (row: any) => row.yearOld,
      sortable: true,
      grow: 4,
      center: true,
      compact: true
    },
  ];

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  createTheme('solarized', {
    text: {
      primary: '#dff4ff',
      secondary: '#b9eafe',
    },
    background: {
      default: '#056287',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');

  const customStyles: any = {
    cells: {
      style: {
        textAlign: 'center'
      }
    }
  }

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  return (
    <>
      <DataTable
        columns={columns}
        data={dataTable}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        responsive={true}
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Filtrar..."
            value={filterText}
            onChange={handleFilter}
            style={{
              padding: '4px',
              width: '100%',
              borderRadius: '4px',
            }}
          />
        }
        customStyles={customStyles}
        subHeaderAlign={Alignment.CENTER}
        onRowClicked={filterToRow}
        theme='solarized'
      />
    </>
  )
}

export default TableInform