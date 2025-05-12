import React, { FC } from 'react'
import { Props } from '../../interfaces/IProps'

const Concept: FC<Props> = ({ }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-10/12 justify-between gap-3">
          <div className='w-full'>
            <p className="text-center text-2xl caret-soa-light-950 font-bold">Tabla Clasificación</p>
            <table className='w-full'>
              <tr className="bg-[#008556] text-white">
                <p className='pl-6 py-2 font-bold'>
                  01. AUDICIÓN SANA
                </p>
              </tr>
              <tr className="bg-[#B4FFE4]">
                <p className='pl-7 py-2 pr-2'>
                  Trabajador expuesto a ruido (igual o superior a 80dBA), sin Cambios de umbral auditivo ni hipoacusia
                </p>
              </tr>
              <tr className="bg-[#157EA3] text-white">
                <p className='pl-6 py-2 font-bold'>
                  02. PERDIDA AUDITIVA SOSPECHOSA
                </p>
              </tr>
              <tr className="bg-[#C5EAF8]">
                <p className='pl-7 py-2 pr-2'>
                  Trabajador con evidencia en la audiometría tamiz (control) de cambios en el umbral auditivo (CUAT) diferencia mayor o igual a 15 dB(A) en cualquier frecuencia, de cualquier oído con respecto a la audiometría de base asociados a exposición laboral a ruido, o en el que se confirme un cambio de umbral auditivo temporal (CUAT) por presentar recuperación de los umbrales auditivos en la audiometría confirmatoria.
                </p>
              </tr>
              <tr className="bg-[#FFC000]">
                <p className='pl-6 py-2 font-bold'>
                  03. PERDIDA AUDITIVA PROBABLE
                </p>
              </tr>
              <tr className="bg-[#FFFFAB]">
                <p className='pl-7 py-2 pr-2'>
                  Trabajador con audiometría confirmatoria que reporte Cambios Permanentes en el Umbral Auditivo (CUAP- diferencia mayor o igual a 15 dB(A)) en cualquier frecuencia con respecto a la audiometría de base, asociados a exposición laboral a ruido.
                </p>
              </tr>
              <tr className="bg-[#404040] text-white">
                <p className='pl-6 py-2 font-bold'>
                  04. PERDIDA AUDITIVA DE BASE
                </p>
              </tr>
              <tr className="bg-[#D9D9D9]">
                <p className='pl-7 py-2 pr-2'>
                  Persona con evidencia de hipoacusia identificado desde la audiometría de ingreso o con hipoacusia no asociada a la exposición laboral en la empresa.
                </p>
              </tr>
              <tr className="bg-[#C00000] text-white">
                <p className='pl-6 py-2 font-bold'>
                  05. PERDIDA AUDITIVA LABORAL CONFIRMADA
                </p>
              </tr>
              <tr className="bg-[#FFC1C1]">
                <p className='pl-7 py-2 pr-2'>
                  Trabajador con antecedentes ocupacionales de exposición a ruido, que reporte Hipoacusia Neurosensorial sin otras causas extra laborales, en el cual se confirma diagnóstico de manera especializada por intermedio de la EPS o ARL con una calificación en firme de enfermedad laboral.
                </p>
              </tr>
            </table>
          </div>
          <div className='w-full'>
            <p className='my-3 text-pretty'>
              Si se encuentran pérdidas auditivas durante las valoraciones audio métricas, se clasificarán de acuerdo con los siguientes criterios:
            </p>
            <p className="text-center text-2xl caret-soa-light-950 font-bold">Tabla Decibeles</p>
            <table className='w-full pt-2'>
              <tr>
                <td className='p-5 bg-[#63BE7B] border border-soa-dark-900'>
                </td>
                <td className='border border-soa-dark-900'>
                  <p className='ml-2 text-xl caret-soa-light-950'> &lt;25 dB Audición normal</p>
                </td>
              </tr>
              <tr>
                <td className='p-5 bg-[#A1D07E] border border-soa-dark-900'>
                </td>
                <td className='border border-soa-dark-900'>
                  <p className='ml-2 text-xl caret-soa-light-950'> 26-40 dB Hipoacusia leve</p>
                </td>
              </tr>
              <tr>
                <td className='p-5 bg-[#DFE282] border border-soa-dark-900'>
                </td>
                <td className='border border-soa-dark-900'>
                  <p className='ml-2 text-xl caret-soa-light-950'> 41-55 dB Hipoacusia moderada</p>
                </td>
              </tr>
              <tr>
                <td className='p-5 bg-[#FED280] border border-soa-dark-900'>
                </td>
                <td className='border border-soa-dark-900'>
                  <p className='ml-2 text-xl caret-soa-light-950'> 56-70 dB Hipoacusia moderada a severa</p>
                </td>
              </tr>
              <tr>
                <td className='p-5 bg-[#FB9D75] border border-soa-dark-900'>
                </td>
                <td className='border border-soa-dark-900'>
                  <p className='ml-2 text-xl caret-soa-light-950'> 71-90 dB Hipoacusia severa</p>
                </td>
              </tr>
              <tr>
                <td className='p-5 bg-[#F8696B] border border-soa-dark-900'>
                </td>
                <td className='border border-soa-dark-900'>
                  <p className='ml-2 text-xl caret-soa-light-950'> &gt;90 dB Hipoacusia profunda</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Concept