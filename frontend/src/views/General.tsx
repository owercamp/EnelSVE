import React, { FC } from 'react'
import GraphInform from '../components/GraphInform'
import TableInform from '../components/TableInform'
import GraphForCentral from '../components/GraphForCentral'
import IModalGraph from '../../interfaces/IModalGraph'
import IDataTable from '../../interfaces/IDataTable'
import IModal from '../../interfaces/IModal'
import ITitle from '../../interfaces/ITitle'
import IInfoGraph from '../../interfaces/IGraphInfo'


const General: FC<IModalGraph & IDataTable & IModal & ITitle & IInfoGraph> = ({ dataTable, infoGraph, filterToRow, title, statusModal, changeModal, data }) => {
  const year = new Date().getFullYear()
  return (
    <>
      <div className={`fixed z-50 inset-0 flex items-center justify-center overflow-hidden ${statusModal ? 'flex' : 'hidden'}`}>
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-2xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {title}
            </h3>
            <div className="mt-2">
              <GraphForCentral labels={data[0]} seriesData={data[1]} />
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={changeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>


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
              <TableInform dataTable={dataTable} filterToRow={filterToRow} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default General