import React, { FC, useEffect, useState } from 'react'
import Container from '../components/container'
import TitleApp from '../components/title'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import Concept from './Concept'
import General from './General'
import { consult_for_central, initInforms } from '../components/Informs'
import { Props } from '../../interfaces/IProps'


const App: FC<Props> = ({ }) => {

  const [informationGraph, setInformationGraph] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [total, setTotal]: any = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [title, setTitle] = useState('');
  const [modal, setModal] = useState(false);
  const [filterDataRow, setFilterDataRow]: any = useState([]);

  const filterRow = (e: any) => {
    const central = e.title;
    setTitle(central);
    const for_central = consult_for_central(central, total);
    setFilterDataRow(for_central);
    changeModal();
  }

  const changeModal = () => {
    setModal(!modal);
  }

  useEffect(() => {
    google.script.run.withSuccessHandler((result: any) => {
      const total_data = JSON.parse(result);
      const data_from_general = initInforms(total_data);
      setTotal(total_data);
      setInformationGraph(data_from_general[1]);
      setDataTable(data_from_general[0]);
    })
      .withFailureHandler((error: any) => {

      })
      .getAll(year);
  }, []);

  return (
    <Container classes="w-screen h-screen">
      <BrowserRouter>
        <div className="w-screen h-screen flex flex-col">
          <nav className="w-full fixed z-50 flex flex-wrap md:flex-nowrap items-center justify-between bg-soa-light-700 dark:bg-soa-dark-900 px-4 py-1">
            <div className="flex items-center">
              <TitleApp title="Riesgo Auditivo - Enel SVE" />
            </div>
            <ul
              id="navigation"
              className="flex flex-wrap justify-center items-center bg-soa-light-700 dark:bg-soa-dark-900 dark:text-white text-gray-200 p-2 rounded"
            >
              <li>
                <Link to="/concept">
                  <a className="max-w-fit inline-flex flex-wrap rounded hover:text-slate-300 transition px-3 py-2 border-r-2 border-l-2 border-gray-400">
                    Conceptos SVE Auditivo {new Date().getFullYear()}
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/general-inform">
                  <a className="max-w-fit inline-flex flex-wrap rounded hover:text-slate-300 transition px-3 py-2 border-r-2 border-l-2 border-gray-400">
                    Informe General
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Rutas */}
          <div className="flex-grow">
            <Routes>
              <Route path="/concept" element={
                <div className='mt-[68px] mb-3'>
                  <Concept />
                </div>
              } />
              <Route path="/general-inform" element={
                <div className='mt-[68px]'>
                  <General infoGraph={informationGraph} dataTable={dataTable} filterToRow={filterRow} title={title} statusModal={modal} changeModal={changeModal} data={filterDataRow} />
                </div>
              } />
              <Route path="*" element={<Navigate to="/concept" replace />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Container>
  )
}

export default App