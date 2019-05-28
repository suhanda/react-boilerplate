import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    shard: {
        fontSize: '1.3em',
        padding: theme.spacing(1, 0),
        display: 'flex',
        itemAlign: 'center',
    },
    amount: {
        flexGrow: 1,
        textAlign: 'right',
    },
    total: {
        fontSize: '1.5em',
        padding: theme.spacing(1, 0),
        textAlign: 'right',

    },
}));

const Shards = ({ shards }) => {
    const style = useStyles();
    const [array, setArray] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const keys = Object.keys(shards).sort((a, b) => b - a);
        setArray(keys);
    }, [shards]);

    useEffect(() => {
        let balanceAfterShard = 0;
        array.forEach((val) => {
            const count = shards[val];
            balanceAfterShard += count * val;
        });
        setTotal(balanceAfterShard);
    }, [array]);

    return (
        <>
            {array.map((val) => {
                const count = shards[val];
                return (
                    <div key={val} className={style.shard}>
                        <div>{`${count} X`}</div>
                        <div className={style.amount}>{`Rp ${numeral(val).format('0,0')}`}</div>
                    </div>
                );
            })}
            {total > 0
            && (
                <div className={style.total}>
                    <Typography variant="h6">{`Total: Rp ${numeral(total).format('0,0')}`}</Typography>
                </div>
            )
            }
        </>
    );
};

Shards.propTypes = {
    shards: PropTypes.any,
};

export default Shards;
