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

describe("Delimiter with multiple characters", () => {
    const calculator = new Calculator();
    test("'//[***]\n1***2' should evaluate to 3", () => {
        expect(calculator.add("//[***]\n1***2")).toBe(3);
    });
    test("'//foo\n1foo2foo3' should evaluate to 6", () => {
        expect(calculator.add("//foo\n1foo2foo3")).toBe(6);
    });
});
