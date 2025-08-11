import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        light: "#FFCCCE",
        main: '#F09491',
        contrastText: '#ffffff', 
    },
    secondary: {
        main: '#9494f2',
        contrastText: '#ffffff',
    },
    error: {
        main: '#d32f2f', 
    },
    success: {
        main: '#94f294',
    },
  },
});

export default theme;
