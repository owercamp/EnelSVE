/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        'soa-light': {
          '50': '#effaff',
          '100': '#dff4ff',
          '200': '#b7ecff',
          '300': '#78deff',
          '400': '#30ceff',
          '500': '#05b8f2',
          '600': '#0095cf',
          '700': '#0076a7',
          '800': '#026a93',
          '900': '#085272',
          '950': '#05354c',
        },
        'soa-dark': {
          '50': '#eaffff',
          '100': '#cafdff',
          '200': '#9cf8ff',
          '300': '#58f1ff',
          '400': '#0ddeff',
          '500': '#00c1ea',
          '600': '#0098c4',
          '700': '#00799e',
          '800': '#0b617f',
          '900': '#0e506b',
          '950': '#023e58',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

