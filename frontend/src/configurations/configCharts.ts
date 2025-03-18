const optionCharts = (labels: any) => {
  return {
    chart: {
      type: 'bar',
      height: 380,
      zoom: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom'
        },
      }
    },
    colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B'],
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['#e5e7eb']
      },
      background: {
        enabled: true,
        foreColor: '#fff',
        padding: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#fff',
        opacity: 0.9,
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: '#000',
          opacity: 0.45
        }
      },
      formatter: function (val: string, opt: any) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val + " casos"
      },
      offsetX: 0,
      dropShadow: {
        enabled: true
      }
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    grid: {
      column: {
        colors: ['#fff', '#f2f2f2']
      }
    },
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: labels,
      tickPlacement: 'between',
      hideOverlappingLabels: true,
      trim: true
    },
    yaxis: {
      labels: {
        show: false
      },
      title: {
        text: 'SVE',
      },
    },
    title: {
      text: 'SVE Auditivo',
      floating: true,
      offsetY: 0,
      align: 'center',
      style: {
        color: '#444'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "vertical",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100]
      },
    }
  }
}

export { optionCharts }