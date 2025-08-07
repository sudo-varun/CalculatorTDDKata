export default class Calculator {
    defaultDelimiter = ',';
    add(expression) {
        if(this.hasCustomDelimiter(expression)) {
            this.defaultDelimiter = this.getCustomDelimiter(expression);
            expression = this.removeCustomDelimiter(expression);
        }
        const regex = new RegExp(`[${this.defaultDelimiter}\\n]`);
        const numbers = expression.split(regex);
        let ans = 0;
        const negativeNumbers = numbers.filter(num => parseInt(num) < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
        }
        for (const number of numbers) {
            const num = parseInt(number);
            ans += num || 0;
        }
        return ans;
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
