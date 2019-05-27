import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});
import App from './App';

const Container = () => (
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
);

export default Container;