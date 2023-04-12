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
  }
})

export default theme
