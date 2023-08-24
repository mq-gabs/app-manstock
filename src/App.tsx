import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/themes/global';
import light from './assets/themes/light';
import { Router } from './routes';
import { AuthProvider } from './hooks/auth';

function App() {
  return (
    <ThemeProvider theme={light}>
      <AuthProvider>
        <GlobalStyles />
        <Router />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App;
