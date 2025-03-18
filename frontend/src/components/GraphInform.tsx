import React, { FC, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { optionCharts } from '../configurations/configCharts';

interface Props {
  labels: string[];
  seriesData: Array<{
    name: string;
    data: number[];
  }>;
}

const GraphInform: FC<Props> = ({ labels = [], seriesData = [] }) => {

  const [state, setState] = useState<{
    series: any,
    options: any,
  }>({
    series: seriesData,
    options: optionCharts(labels)
  });

  useEffect(() => {
    options: optionCharts(labels);
    series: seriesData;
  }, [seriesData, labels])

  return (
    <div className="mixed-chart" style={{ position: 'relative', minWidth: '900px', minHeight: '500px' }}>
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