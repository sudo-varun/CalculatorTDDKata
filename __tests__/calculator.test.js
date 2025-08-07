import Calculator from '../calculator.js';

describe('Basic functionality', () => {
    const calculator = new Calculator();
    test("empty string should return 0", () => {
        expect(calculator.add("")).toBe(0);
    });
    test("Single number should return the number", () => {
        expect(calculator.add("7")).toBe(7);
    })
});
describe("Comma seperated expression", () => {
    const calculator = new Calculator();
    test("'1,2' should evaluate to 3", ()=> {
        expect(calculator.add("1,2")).toBe(3);
    })
    test("'1,2,3,4' should evaluate to 10", () => {
        expect(calculator.add("1,2,3,4")).toBe(10);
    })
    test("'1,' should evaluate to 1", () => {
        expect(calculator.add("1,")).toBe(1);    
    })
})