/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customGray': '#2F2F2F',
        'customPink': '#DE4278',
        'customBlue': '#00427C',
        'customDarkGray': '#212121',
        'customDarkGrayLight': '#333333',
        'customLightBlue': '#D3EDFC',
      },
      boxShadow: {
        'custom-blue': '0px 4px 20px 4px rgba(0, 66, 124, 0.15)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(0,182,239,1) 0%, rgba(224,76,127,1) 100%)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.btn': {
          backgroundColor: '#DE4278',
          color: '#fff',
          fontSize: '1.25rem', // text-xl
          fontWeight: '700', // font-bold
          paddingLeft: '30px',
          paddingRight: '30px',
          paddingTop: '0',
          paddingBottom: '0',
          borderRadius: '0.5rem', // rounded-lg
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '54px',
          maxWidth: 'fit-content',
          width: '100%',
        },
      });
    },
  ],
}

