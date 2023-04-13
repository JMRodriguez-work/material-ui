import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9'
    },
    secondary: {
      main: '#f48fb1'
    },
    background: {
      default: '#242629',
      paper: '#333'
    },
    text: {
      primary: '#fff',
      secondary: '#90caf9'
    }
  },
  typography: {
    h1: {
      fontSize: '3.5rem', // Cambiar el tamaño de fuente de H1
      fontWeight: 'bold' // Agregar negrita a H1
    },
    h2: {
      fontSize: '3rem' // Cambiar el tamaño de fuente de H2
    },
    h3: {
      fontSize: '2.5rem' // Cambiar el tamaño de fuente de H3
    },
    h4: {
      fontSize: '2rem' // Cambiar el tamaño de fuente de H4
    },
    h5: {
      fontSize: '1.5rem' // Cambiar el tamaño de fuente de H5
    },
    h6: {
      fontSize: '1.25rem' // Cambiar el tamaño de fuente de H6
    }
  }
})

export default theme
