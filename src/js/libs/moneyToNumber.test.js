import moneyToNumber from './moneyToNumber';


describe('moneyToNumber', () => {
    it('should be true from 18.215 (18215)', () => {
        const numberStr = moneyToNumber('Rp', '18.215');
        expect(numberStr).toBe(18215);
    });
    it('should be true from Rp17500 (17500)', () => {
        const numberStr = moneyToNumber('Rp', 'Rp17500');
        expect(numberStr).toBe(17500);
    });
    it('should be true from Rp17.500,00 (17500)', () => {
        const numberStr = moneyToNumber('Rp', 'Rp17.500,00');
        expect(numberStr).toBe(17500);
    });
    it('should be true from Rp 120.325 (120325)', () => {
        const numberStr = moneyToNumber('Rp', 'Rp 120.325');
        expect(numberStr).toBe(120325);
    });
    it('should be true from 005.000 (5000)', () => {
        const numberStr = moneyToNumber('Rp', '005.000');
        expect(numberStr).toBe(5000);
    });
    it('and should be true from 001000 (1000)', () => {
        const numberStr = moneyToNumber('Rp', '001000');
        expect(numberStr).toBe(1000);
    });

    it('should be false from 17,500', () => {
        const numberStr = moneyToNumber('Rp', '17,500');
        expect(numberStr).toBe(false);
    });

    it('should be false from 2 500', () => {
        const numberStr = moneyToNumber('Rp', '17,500');
        expect(numberStr).toBe(false);
    });

    it('should be false from Rp', () => {
        const numberStr = moneyToNumber('Rp', 'Rp');
        expect(numberStr).toBe(false);
    });
});
