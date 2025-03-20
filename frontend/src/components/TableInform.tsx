import React, { FC, useState } from 'react'
import DataTable, { Alignment, createTheme } from 'react-data-table-component'

interface Props { }

const columns = [
  {
    name: 'Central',
    selector: (row: any) => row.title,
    sortable: true,
    grow: 10,
    center: true,
    compact: true
  },
  {
    name: '2025',
    selector: (row: any) => row.yearNew,
    sortable: true,
    grow: 4,
    center: true,
    compact: true
  },
  {
    name: '2024',
    selector: (row: any) => row.yearOld,
    sortable: true,
    grow: 4,
    center: true,
    compact: true
  },
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    yearNew: 12,
    yearOld: 12
  },
  {
    id: 2,
    title: 'Ghostbusters',
    yearNew: 10,
    yearOld: 13
  },
  {
    id: 3,
    title: 'The Beetles',
    yearNew: 70,
    yearOld: 48
  },
  {
    id: 4,
    title: 'Ghostbusters 2',
    yearNew: 20,
    yearOld: 46
  },
]

const TableInform: FC<Props> = ({ }) => {
  const [filterText, setFilterText] = useState('');

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

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
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
        subHeaderAlign={Alignment.CENTER}
        theme='solarized'
      />
    </>
  )
}

export default TableInform