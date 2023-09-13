import { ThemeProvider } from "@mui/material"
import Router from "./routes/Router"
import theme from "./themes/theme"

function App() {
  return(
    <ThemeProvider theme={ theme }>
      <Router />
    </ThemeProvider>
  )
}

export default App
