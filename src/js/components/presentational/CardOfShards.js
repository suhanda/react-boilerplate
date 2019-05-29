import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import splitNumberToNominals from '@libs/utils/splitNumberToNominals';
import { Card, Container } from '@material-ui/core';
import Shards from './Shards';


const CardOfShards = ({ balance }) => {
    const [shards, setShards] = useState([]);

    const calculateShards = useCallback(
        (value) => {
            const shardsObject = splitNumberToNominals(value);
            const availabelShards = {};
            const keys = Object.keys(shardsObject);
            keys.forEach((key) => {
                if (shardsObject[key] > 0) {
                    availabelShards[key] = shardsObject[key];
                }
            });

            setShards(availabelShards);
        },
        [],
    );

    useEffect(() => {
        if (balance > 0) {
            calculateShards(balance);
        } else {
            setShards([]);
        }
    }, [balance]);

    return (
        <Card elevation={1}>
            <Container style={{ marginTop: 8, marginBottom: 8 }}>
                <Shards shards={shards} />
            </Container>
        </Card>
    );
};

CardOfShards.propTypes = {
    balance: PropTypes.number,
};

CardOfShards.defaultProps = {
    balance: 0,
};


export default CardOfShards;
