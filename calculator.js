export default class Calculator {
    add(expression) {
        const numbers= expression.split(",");
        return parseInt(numbers[0] || 0) + parseInt(numbers[1] || 0);
    }
}
