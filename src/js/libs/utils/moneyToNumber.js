import { isEmpty } from 'lodash';

const leftTrimPattern = /^0*/g;

const moneyToNumber = (currency, str, thousandSeperator = '.', decSeperator = ',') => {
    const pattern = `^(${currency})?( )?(((((\\d{1,3}))(\\${thousandSeperator}\\d{3})*?)|(\\d*))(${decSeperator}\\d*)?)$`;
    const regex = new RegExp(pattern, 'gm');
    const matches = regex.exec(str);
    if (matches !== null && !isEmpty(matches[3])) {
        const strNumber = matches[3].replace(leftTrimPattern, '');
        let splitThousand = strNumber.split(thousandSeperator);
        let dec = splitThousand[splitThousand.length - 1].split(decSeperator);
        if (dec.length === 2) {
            splitThousand = [...splitThousand.slice(0, splitThousand.length - 1), dec[0]];
            dec = dec[1];

            return parseFloat(`${splitThousand.join('')}.${dec}`);
        }

        return parseFloat(splitThousand.join(''));
    }

    return false;
};


export default moneyToNumber;
