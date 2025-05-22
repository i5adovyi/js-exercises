# JavaScript Exercises

A collection of JavaScript programming exercises and practices.

## Setup

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run linting
npm run lint
```

## Available Packages

This project includes several useful packages for learning JavaScript:

### Core Dependencies

- **@faker-js/faker**: Generate realistic fake data for testing
- **axios**: Promise-based HTTP client for making API requests
- **cheerio**: Fast and flexible implementation of jQuery for server-side HTML parsing
- **dotenv**: Load environment variables from .env files
- **jest-extended**: Additional Jest matchers for more expressive tests
- **jest-sorted**: Jest matchers for testing sorted arrays
- **lodash**: Utility library with helpful functions
- **moment**: Library for parsing, validating, manipulating, and formatting dates
- **sanitize-html**: Clean up user-submitted HTML and prevent XSS attacks
- **uuid**: Generate RFC-compliant UUIDs

### Development Tools

- **ESLint**: Linting with modern JavaScript and TypeScript support
- **Jest**: Testing framework with coverage reporting
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **Husky & lint-staged**: Pre-commit hooks for code quality
- **Playwright**: End-to-end testing library
- **Vitest**: Fast Vite-based test runner (alternative to Jest)

## Project Structure

- `src/`: Source code for exercises
  - `strings/`: String manipulation exercises
- `tests/`: Test files for the exercises

## Contributing

1. Add your exercise file in the appropriate directory under `src/`
2. Create tests for your exercise in the `tests/` directory
3. Make sure all tests pass and code follows the style guidelines
4. Submit a pull request
