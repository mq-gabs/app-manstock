import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/themes/global';
import light from './assets/themes/light';
import { Router } from './routes';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  )
}

export default App;
