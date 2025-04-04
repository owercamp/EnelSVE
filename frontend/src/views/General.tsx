import React, { FC } from 'react'
import GraphInform from '../components/GraphInform'
import TableInform from '../components/TableInform'

interface Props {
  infoGraph: any,
  msg: any,
  dataTable: any
}

const General: FC<Props> = ({ dataTable, infoGraph, msg }) => {
  const year = new Date().getFullYear()
  return (
    <>
      <div className="flex justify-center">
        <div className="w-10/12">
          <div className='border-l-8 border-r-8 border-t-2 border-b-2 border-soa-light-950/75 rounded-sm p-4 min-w-full'>
            <h2 className='text-2xl'>Informe General SVE Auditivo {year}</h2>
            <p>Vista general de la población con EMOs ejecutado en el {year} y clasificación por estado del caso en el SVE</p>
          </div>
          <div className="w-full flex flex-row gap-3">
            <div className='w-full pt-3'>
              <GraphInform seriesData={infoGraph[1]} labels={infoGraph[0]} />
            </div>
            <div className='w-full pt-3'>
              <TableInform dataTable={dataTable} msg={msg} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default General