# Calculator Kata

A simple calculator project following Test-Driven Development (TDD) using JavaScript, ES6 modules, and Jest for testing.
This has two branches 
1. ***beginnerKata*** which covers basic TDD kata
2. ***fullTDDKata*** which covers full TDD kata

## Features
- Basic calculator functionality
- ES6 module support
- Jest for unit testing

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd calculator-kata
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests
To run the test suite:
```bash
npm test
```

> **Note:** This project uses ES6 modules. Jest is configured to support ESM with the `--experimental-vm-modules` flag.

## Project Structure
```
calculator-kata/
  ├── __tests__/              # Test files
  ├── calculator.js           # Calculator implementation (TDD)
  ├── package.json            # Project metadata and scripts
  ├── .gitignore              # Git ignore rules
  └── README.md               # Project documentation
```

## License
This project is licensed under the ISC License.