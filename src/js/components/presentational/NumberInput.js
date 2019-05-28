import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const NumberInput = ({ onChange, helperText }) => {
    const [value, setValue] = useState('');
    const handleOnChange = (e) => {
        setValue(e.target.value);
    };
    useEffect(() => {
        onChange(value);
    }, [value]);

    return (
        <TextField
            label="Input"
            placeholder="Please Input Money Format"
            helperText={helperText}
            style={{ fontSize: '1.5em' }}
            error={!isEmpty(helperText)}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={handleOnChange}
            value={value}
        />
    );
};


NumberInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    helperText: PropTypes.string,
};

NumberInput.defaultProps = {
    helperText: '',
};

export default NumberInput;
