import moneyToNumber from './moneyToNumber';


describe('moneyToNumber', () => {
    it('should be true for 2.000.000.000 (2000000000)', () => {
        const numberStr = moneyToNumber('Rp', '2.000.000.000');
        expect(numberStr).toBe(2000000000);
    });
    it('should be true for 18.215 (18215)', () => {
        const numberStr = moneyToNumber('Rp', '18.215');
        expect(numberStr).toBe(18215);
    });
    it('should be true for Rp17500 (17500)', () => {
        const numberStr = moneyToNumber('Rp', 'Rp17500');
        expect(numberStr).toBe(17500);
    });
    it('should be true for Rp17.500,00 (17500)', () => {
        const numberStr = moneyToNumber('Rp', 'Rp17.500,00');
        expect(numberStr).toBe(17500);
    });
    it('should be true for Rp 120.325 (120325)', () => {
        const numberStr = moneyToNumber('Rp', 'Rp 120.325');
        expect(numberStr).toBe(120325);
    });
    it('should be true for 005.000 (5000)', () => {
        const numberStr = moneyToNumber('Rp', '005.000');
        expect(numberStr).toBe(5000);
    });
    it('and should be true for 001000 (1000)', () => {
        const numberStr = moneyToNumber('Rp', '001000');
        expect(numberStr).toBe(1000);
    });

    it('should be false for 17,500', () => {
        const numberStr = moneyToNumber('Rp', '17,500');
        expect(numberStr).toBe(false);
    });

    it('should be false for 2 500', () => {
        const numberStr = moneyToNumber('Rp', '17,500');
        expect(numberStr).toBe(false);
    });

    it('should be false for Rp', () => {
        const numberStr = moneyToNumber('Rp', 'Rp');
        expect(numberStr).toBe(false);
    });
});
