module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      supersm: '300px',
      smsm:'550px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xlchikito: '1030px',
      NestHubMax: '1281px',
      xl: '1400px',
      xlxl: '1600px'
    },
    extend: {
      animation: {
        'spin-slow': 'spin .1s linear infinite',
        'modal-llega': 'animate__animated animate__heartBeat'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
