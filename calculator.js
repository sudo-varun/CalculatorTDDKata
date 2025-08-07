export default class Calculator {
    defaultDelimiter = ',';
    add(expression) {
        if(this.hasCustomDelimiter(expression)) {
            this.defaultDelimiter = this.getCustomDelimiter(expression);
            expression = this.removeCustomDelimiter(expression);
        }
        const numbers = this.getNumbers(expression);
        const negativeNumbers = numbers.filter(num => parseInt(num) < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
        }
        return this.calculate(numbers);
    }
    getNumbers(expression) {
        const regex = new RegExp(`[${this.defaultDelimiter}\\n]`);
        return expression.split(regex);
    }
    calculate(numbers) {
        return numbers.reduce((acc, num) => acc + (parseInt(num) || 0), 0);
    }
    hasCustomDelimiter(expression) {
        return expression.startsWith('//');
    }
    getCustomDelimiter(expression) {
        return expression.charAt(2);
    }
    removeCustomDelimiter(expression) {
        return expression.substring(expression.indexOf('\n') + 1);
    }
}
