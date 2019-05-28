
const defaultNominals = [
    100000,
    50000,
    20000,
    10000,
    5000,
    2000,
    1000,
    500,
    200,
    100,
    50,
];

/**
 * Split to number to amount of mony shards
 * @param {*} number
 * @param {*} nominals
 */
const splitNumberToNominals = (number, nominals = defaultNominals) => {
    const result = {};
    let modifyNumber = Math.round(number);
    nominals.forEach((nominal) => {
        const multiply = Math.floor(modifyNumber / nominal);
        modifyNumber -= (nominal * multiply);
        result[nominal] = multiply;
    });

    if (modifyNumber > 0) {
        const smallestShard = nominals[nominals.length - 1];
        result[smallestShard] += Math.round(modifyNumber / smallestShard);
    }

    return result;
};


export default splitNumberToNominals;
