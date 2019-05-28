import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';
import App from './App';

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const Container = () => (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);

export default Container;
