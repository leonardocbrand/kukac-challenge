import { ThemeProvider } from "@mui/material"
import Router from "./routes/Router"
import theme from "./themes/theme"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return(
    <ThemeProvider theme={ theme }>
      <NavBar />
      <Router />
    </ThemeProvider>
  )
}

export default App
