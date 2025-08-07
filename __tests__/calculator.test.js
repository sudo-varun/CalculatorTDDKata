import Calculator from '../calculator.js';

describe('Calculator', () => {
    const calculator = new Calculator();
    test("empty string should return 0", () => {
        expect(calculator.add("")).toBe(0);
    });
    test("Single number should return the number", () => {
        expect(calculator.add("7")).toBe(7);
    })
});