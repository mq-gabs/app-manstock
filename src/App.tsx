import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/themes/global';
import light from './assets/themes/light';
import { Home } from './pages/home/home';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App;
