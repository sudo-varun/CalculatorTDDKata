import Calculator from '../calculator.js';

describe('Calculator', () => {
    const calculator = new Calculator();
    test("empty string should return 0", () => {
        expect(calculator.add("")).toBe(0);
    });
    test("Single number should return the number", () => {
        expect(calculator.add("7")).toBe(7);
    })
    test("comma seperated numbers in expression should evaluate to addition of numbers", () => {
        expect(calculator.add("4,2")).toBe(6);
    })
});