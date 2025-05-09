import React, { FC, useEffect, useState } from 'react'
import { IGraphInform } from '../../interfaces/interfaces'
import ReactApexChart from 'react-apexcharts'
import { optionChartModal } from '../configurations/configCharts';

const GraphForCentral: FC<IGraphInform> = ({ labels = [], seriesData = [] }) => {

  const [state, setState] = useState<{
    series: Array<{
      name: string,
      data: number[]
    }>,
    options: object,
  }>({
    series: seriesData,
    options: optionChartModal(labels),
  });

  useEffect(() => {
    options: optionChartModal(labels);
    series: seriesData;
  }, [seriesData, labels])

  return (
    <>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
      </div>
      <div id="html-dist"></div>
    </>
  )
}

export default GraphForCentral