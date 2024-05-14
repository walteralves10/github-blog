import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { UsersProvider } from './contexts/users-context'
import { IssuesProvider } from './contexts/issues-context'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <UsersProvider>
          <IssuesProvider>
            <Router />
          </IssuesProvider>
        </UsersProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
