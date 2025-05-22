# Implementation Guide for Conditionals Exercises

This guide will help you work through the conditionals exercises in a structured way.

## Getting Started

1. **Read the documentation**: Start by reading the `readme.md` file to understand JavaScript conditionals.

2. **Understand the exercises**: Open `conditionals.js` and review the function signatures and JSDoc comments.

3. **Progressive learning**: The exercises are organized by Bloom's Taxonomy levels (Remember → Create) and SOLO Taxonomy levels (Unistructural → Extended Abstract) to progressively build your understanding.

## Implementation Process

For each exercise:

1. **Read the function documentation**: Understand what the function should do.

2. **Implement the function**: Replace the TODO comments with your code.

3. **Run the tests**: Use the following command to test your implementation:
   ```bash
   npm test -- conditionals/conditionals.test.js
   ```

4. **Fix any issues**: If tests fail, review your implementation and try again.

5. **Check the solution**: Once you've completed an exercise (or if you're stuck), you can look at the corresponding solution in `solutions.js`.

## Example Workflow

Here's an example of implementing the first exercise:

1. Read the function definition:
   ```javascript
   /**
    * Determines if a number is positive
    * @param {number} num - The number to check
    * @returns {boolean} True if the number is positive, false otherwise
    */
   export function isPositive(num) {
     // TODO: Write a simple if statement that returns true if num is greater than 0
     // and false otherwise
   }
   ```

2. Implement the function:
   ```javascript
   export function isPositive(num) {
     if (num > 0) {
       return true;
     } else {
       return false;
     }
   }
   ```

3. Run the tests:
   ```bash
   npm test -- conditionals/conditionals.test.js
   ```

4. If successful, move to the next exercise.

## Learning Tips

1. **Start simple**: Begin with the REMEMBER level exercises before moving to more complex ones.

2. **Multiple approaches**: Many exercises can be solved in different ways. Try to think of alternative solutions.

3. **Refactor**: After getting a solution working, try to refactor it to be more concise or readable.

4. **Review concepts**: If you're struggling with an exercise, go back to the readme and review the relevant concepts.

5. **Progressive difficulty**: The exercises intentionally get more challenging. It's normal to spend more time on the higher Bloom's Taxonomy levels.

## Advanced Challenges

Once you've completed all the exercises, consider these advanced challenges:

1. **Write additional tests**: Think of edge cases not covered by the existing tests.

2. **Optimize solutions**: Look for ways to make your code more efficient or concise.

3. **Create your own exercises**: Design new conditional exercises that cover different scenarios.

4. **Combine with other concepts**: Try to integrate these conditionals with functions from other sections of the project.

Happy coding!