import splitNumberToNominals from './splitNumberToNominals';

describe('splitNumberToNominals', () => {
    test('should have 40000 == 2x20000', () => {
        const result = splitNumberToNominals(40000);
        expect(result[20000]).toBe(2);
    });

    test('should have 42000 == 2x20000 + 1x2000', () => {
        const result = splitNumberToNominals(42000);
        expect(result[20000]).toBe(2);
        expect(result[2000]).toBe(1);
    });

    test('should have 1142000 == 11x100000 + 2x20000 + 1x2000', () => {
        const result = splitNumberToNominals(1142000);
        expect(result[100000]).toBe(11);
        expect(result[20000]).toBe(2);
        expect(result[2000]).toBe(1);
    });

    test('should have 1142000.50 == 11x100000 + 2x20000 + 1x2000 + 1x50', () => {
        const result = splitNumberToNominals(1142000.50);
        expect(result[100000]).toBe(11);
        expect(result[20000]).toBe(2);
        expect(result[2000]).toBe(1);
        expect(result[50]).toBe(0);
    });

    test('should have 1234567 == 12x100000 + 1x20000 + 1x10000 + 2x2000 + 1x500 + 2x50', () => {
        const result = splitNumberToNominals(1234567);
        expect(result[100000]).toBe(12);
        expect(result[20000]).toBe(1);
        expect(result[10000]).toBe(1);
        expect(result[2000]).toBe(2);
        expect(result[500]).toBe(1);
        expect(result[50]).toBe(1);
    });
});
