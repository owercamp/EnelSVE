import React, { FC } from 'react'
import Container from '../components/container'
import TitleApp from '../components/title'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

interface Props { }

const App: FC<Props> = ({ }) => {
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
                <Link to="/Framingham">
                  <a className="max-w-fit inline-flex flex-wrap rounded hover:text-slate-300 transition px-3 py-2 border-r-2 border-l-2 border-gray-400">
                    Item 1
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Sindrome">
                  <a className="max-w-fit inline-flex flex-wrap rounded hover:text-slate-300 transition px-3 py-2 border-r-2 border-l-2 border-gray-400">
                    Item 2
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Aterogenia">
                  <a className="max-w-fit inline-flex flex-wrap rounded hover:text-slate-300 transition px-3 py-2 border-r-2 border-l-2 border-gray-400">
                    Item 3
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Intervencion">
                  <a className="max-w-fit inline-flex flex-wrap rounded hover:text-slate-300 transition px-3 py-2 border-r-2 border-l-2 border-gray-400">
                    Item 4
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Rutas */}
          <div className="flex-grow">
            <Routes>
              <Route path="/Framingham" element={<h1>Framingham</h1>} />
              <Route path="/Sindrome" element={<h1>Sindrome Metabolico</h1>} />
              <Route path="/Aterogenia" element={<h1>Aterogenia</h1>} />
              <Route path="/Intervencion" element={<h1>Intervencion</h1>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Container>
  )
}

export default App