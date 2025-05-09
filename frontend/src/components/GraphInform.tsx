import React, { FC, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { optionCharts } from '../configurations/configCharts';
import { IGraphInform } from '../../interfaces/interfaces';


const GraphInform: FC<IGraphInform> = ({ labels = [], seriesData = [] }) => {

  const [state, setState] = useState<{
    series: Array<{
      name: string,
      data: number[]
    }>,
    options: object,
  }>({
    series: seriesData,
    options: optionCharts(labels)
  });

  useEffect(() => {
    options: optionCharts(labels);
    series: seriesData;
  }, [seriesData, labels])

  return (
    <div className="mixed-chart" style={{ position: 'relative', minWidth: '700px', minHeight: '700px' }}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  )
}

export default GraphInform