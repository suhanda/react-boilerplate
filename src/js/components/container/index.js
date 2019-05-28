import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';
import { CssBaseline } from '@material-ui/core';
import App from './App';

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const AppContainer = () => (
    <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.Fragment>
);

export default AppContainer;
