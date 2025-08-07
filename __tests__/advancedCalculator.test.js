import Calculator from '../calculator';

describe("Numbers greater than 1000", () => {
    const calculator = new Calculator();
    test("'1001,2' should evaluate to 2", () => {
        expect(calculator.add("1001,2")).toBe(2);
    });
    test("'1000,2000' should evaluate to 1000", () => {
        expect(calculator.add("1000,2000")).toBe(1000);
    });
});