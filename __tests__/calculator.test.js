import Calculator from '../calculator.js';

describe('Calculator', () => {
    const calculator = new Calculator();
    test("empty string should return 0", () => {
        expect(calculator.add("")).toBe(0);
    });
});