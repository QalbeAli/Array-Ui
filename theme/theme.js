import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      alternate: {
        main: '',
        dark: '#152951',
      },
      cardShadow: 'rgba(71, 103, 251, 0.07);',
      common: {
        cardBorder: '#81A9D8',
        cardbg2: 'rgba(71, 103, 251, 0.1)',
        black: '#fff',
        white: '#fff',
        blue: '#81A9D8',
        DarkBlue: '#466DFD',
        smText: '#81A9D8',
      },

      text: {
        primary: '#fff',
        secondary: '#fff',
        light: '#81A9D8',
      },

      background: {
        default: '#0d1324',
        level1: 'rgba(255, 255, 255, 0.05)',
      },
    },

    typography: {
      // eslint-disable-next-line quotes
      fontFamily: ['Poppins', 'sans-serif'],
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      lineHeight: 1.5,
      h1: {
        fontSize: '32px',
        fontWeight: 'bold',
      },

      h2: {
        fontSize: '16px',
        color: '#81A9D8',
      },
      h4: {
        fontSize: '16px',
        color: '#fff',
        background: 'linear-gradient(90deg, #FF3E3D 0%, #466DFD 100%)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },

    // shape: {
    //   borderRadius: 15,
    // },
  }),
);

export default theme;
