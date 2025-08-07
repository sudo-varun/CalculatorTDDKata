export default class Calculator {
    add(expression) {
        const numbers = expression.split(/,|\n/g);
        let ans = 0;
        for (const number of numbers) {
            ans += parseInt(number || 0);
        }
        return ans;
    }
}
