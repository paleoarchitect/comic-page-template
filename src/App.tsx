import './App.css'
import Sidebar from './components/Sidebar'
import PageCanvas from './components/PageCanvas'
import { Box, AppBar, Toolbar, Typography, CssBaseline, ThemeProvider, createTheme } from '@mui/material'

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#5B21B6', // Purple color for primary elements
    },
    background: {
      default: '#F3F4F6', // Light gray background
    },
  },
  typography: {
    h1: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{ borderRadius: 0 }}>
        <Toolbar>
          <Typography variant="h1" align="center" color="white" sx={{ flexGrow: 1 }}>
            Comic Page Template Creator
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ minHeight: 'calc(100vh - 64px)', bgcolor: 'background.default', p: 2 }}>
        <Box className="app-layout">
          {/* Sidebar with controls */}
          <Box>
            <Sidebar />
          </Box>

          {/* Canvas/Preview Area */}
          <Box>
            <PageCanvas />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
