import { Container } from '@mui/material'
import { Searcher } from './components/Searcher/Searcher'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'

function App () {
  const containerStyle = {
    background: '#242629',
    width: '80vw',
    height: '500px',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  return (
    <ThemeProvider theme={theme}>
      <Container sx={containerStyle}>
        <Searcher />
      </Container>
    </ThemeProvider>
  )
}

export default App
