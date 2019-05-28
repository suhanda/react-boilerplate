import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import {
    Typography, AppBar, Toolbar, Container,
} from '@material-ui/core';
import NumberInput from '@components/presentational/NumberInput';
import useDebounce from '@libs/hooks/useDebounce';
import moneyToNumber from '@libs/utils/moneyToNumber';

export default () => {
    const [inputValue, setInputValue] = useState('');
    const [balance, setBalance] = useState(0);
    const [error, setError] = useState('');
    const value = useDebounce(inputValue, 1000);

    useEffect(() => {
        if (!isEmpty(value)) {
            const number = moneyToNumber('Rp', value);
            setError(number === false ? 'Invalid Balance' : '');
            setBalance(number || 0);
        } else {
            setError('');
            setBalance(0);
        }
    }, [value]);

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="textSecondary">
                        Money Shards Calculator
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md">
                <NumberInput onChange={setInputValue} helperText={error} />
                <Typography>{balance}</Typography>
            </Container>
        </>
    );
};
