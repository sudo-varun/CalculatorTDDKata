export default class Calculator {
    /**
     * Calculator class that performs addition on a string of numbers.
     * Numbers in the string can be delimited by the default delimiter or a custom one.
     * @class
     * 
     * @throws {Error} Throws an error if negative numbers are provided
     */

    allDelimiters = ['\n']; // Default delimiter for numbers currently set to comma
    defaultDelimiter = ",";
    /**
     * Adds the numbers in the given string.
     * @param {string} expression - The string containing numbers to add.
     * @returns {number} The sum of the numbers.
     * @throws {Error} Throws an error if negative numbers are found in the string.
     */
    add(expression) {
        if(this.hasCustomDelimiter(expression)) {
            this.allDelimiters = this.allDelimiters.concat(this.getCustomDelimiters(expression));
            expression = this.removeCustomDelimiter(expression);
        }
        const numbers = this.getNumbers(expression, this.allDelimiters.slice()); // Use a copy of the default delimiters
        this.throwIfNegativeNumbers(numbers);
        return this.calculate(numbers);
    }
    /**
     * Extracts numbers from the expression based on the provided delimiters.
     * @param {string} currentExpression - The string containing numbers to extract.
     * @param {Array<string>} delimiters - An array of delimiters to use for splitting the string.
     * @returns {Array<string>} An array of number strings extracted from the
     */
    getNumbers(currentExpression, delimiters) {
        for(const delimiter of delimiters) {
            currentExpression = currentExpression.split(delimiter).join(this.defaultDelimiter);
        }
        return currentExpression.split(this.defaultDelimiter);
    }


    /**
     * Checks if the expression contains negative numbers and throws an error if found.
     * @param {Array<string>} numbers - An array of number strings.
     * @throws {Error} Throws an error if negative numbers are found.
     */
    throwIfNegativeNumbers(numbers) {
        const negativeNumbers = numbers.filter(num => parseInt(num) < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
        }
    }

    /**
     * Calculates the sum of an array of number strings.
     * @param {Array<string>} numbers - An array of number strings.
     * @returns {number} The sum of the numbers.
     */
    calculate(numbers) {
        return numbers.reduce((acc, num) => {
            const number = parseInt(num || 0);
            return number > 1000 ? acc : acc + number; // Ignore numbers greater than 1000
        }, 0);
    }

    /**
     * Checks if the expression has a custom delimiter.
     * @param {string} expression - The string to check for a custom delimiter.
     * @returns {boolean} True if a custom delimiter is present, false otherwise.
     */
    hasCustomDelimiter(expression) {
        return expression.startsWith('//'); // Expression with custom delimiter starts with '//'
    }

    /**
     * Extracts the custom delimiter from the expression.
     * @param {string} expression - The string containing the custom delimiter.
     * @returns {string} The custom delimiter.
     */
    getCustomDelimiters(expression) {
        const delimitersString = expression.split('\n')[0].substring(2); // Remove the '//'
        if(/^\[.+\]$/.test(delimitersString)) {
            // If the delimiter is in the format //[delimiter]
            return delimitersString.substring(1, delimitersString.length - 1).split('][');
        } 
        return [delimitersString]; // If the delimiter is a single character, return it as an array
    }
    /**
     * Removes the custom delimiter from the expression.
     * @param {string} expression - The string containing the custom delimiter.
     * @returns {string} The expression without the custom delimiter.
     */
    removeCustomDelimiter(expression) {
        return expression.substring(expression.indexOf('\n') + 1);
    }
}
