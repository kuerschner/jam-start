import React from 'react';
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
      h1: {
          fontSize: '5rem',
          fontFamily: 'Oswald',
          fontWeight: '700',
          marginTop: '0.5rem',
          marginBottom: '1rem'
      },
      h2: {
          fontSize: '3rem',
          fontFamily: 'Oswald',
          fontWeight: '600',
          marginTop: '0.5rem',
          marginBottom: '1rem'
      },
      h3: {
          fontSize: '1.5rem',
          fontFamily: 'Oswald',
          fontWeight: '500',
          marginTop: '0.5rem',
          marginBottom: '1rem'
      },
      body1: {
          fontSize: '1rem',
          fontFamily: 'Open Sans',
          marginTop: '0.5rem',
          marginBottom: '0.5rem'
      },
      fontFamily: [
          'Open Sans',
          'sans-serif'
      ].join(','),
  },
  palette: {
      primary: {
          main: '#02b55b',
      },
      secondary: {
          light: '#0066ff',
          main: '#0044ff',
      },
  },

});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Main />
    </ThemeProvider>
  );
}

export default App;
