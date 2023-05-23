import { ThemeProvider } from '@mui/material/styles';
import Login from './components/LoginPage';
import WebFont from 'webfontloader';
import { CssBaseline } from '@mui/material';
import { theme } from './themes/theme';

WebFont.load({
  google: {
    families: ['Rajdhani:300,400', 'Kanit:300,400']
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
