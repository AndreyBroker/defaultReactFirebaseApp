import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PageRoutes from './routes';
import { ThemeProvider } from '@mui/material';
import theme from './config/theme';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <PageRoutes />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
