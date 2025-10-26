/**
 * FOR LOOP DOCUMENTATION:
 * A for loop repeats code a specific number of times.
 *
 * Syntax:
 * for (initialization; condition; increment) {
 *   // code to repeat
 * }
 *
 * Three parts:
 * 1. Initialization: Declare and set starting value (let i = 1)
 * 2. Condition: Check if loop should continue (i <= 5)
 * 3. Increment: Update counter after each iteration (i++)
 *
 * Example:
 * for (let i = 1; i <= 3; i++) {
 *   console.log(i);  // prints 1, 2, 3
 * }
 *
 * Common patterns:
 * - Count up: i++
 * - Count down: i--
 * - Skip by 2: i += 2
 */

/**
 * JavaScript Loops - Exercise 1: Basic For Loop
 *
 * Exercise: Print numbers from 1 to 5
 * Use a for loop to print each number from 1 to 5 using console.log()
 *
 * Expected output in console:
 * 1
 * 2
 * 3
 * 4
 * 5
 *
 * TODO: Write a for loop below that prints numbers 1 to 5
 */

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

/**
 * JavaScript Loops - Exercise 2: Count Backwards
 *
 * Exercise: Print numbers from 10 down to 1
 * Use a for loop to print each number from 10 down to 1 using console.log()
 *
 * Expected output in console:
 * 10
 * 9
 * 8
 * 7
 * 6
 * 5
 * 4
 * 3
 * 2
 * 1
 *
 * TODO: Write a for loop below that prints numbers 10 down to 1
 */

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

/**
 * JavaScript Loops - Exercise 3: Skip Numbers
 *
 * Exercise: Print only even numbers from 2 to 10
 * Use a for loop to print only the even numbers: 2, 4, 6, 8, 10
 *
 * Expected output in console:
 * 2
 * 4
 * 6
 * 8
 * 10
 *
 * TODO: Write a for loop below that prints only even numbers from 2 to 10
 */

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

/**
 * JavaScript Loops - Exercise 4: Odd Numbers
 *
 * Exercise: Print only odd numbers from 1 to 9
 * Use a for loop to print only the odd numbers: 1, 3, 5, 7, 9
 *
 * Expected output in console:
 * 1
 * 3
 * 5
 * 7
 * 9
 *
 * TODO: Write a for loop below that prints only odd numbers from 1 to 9
 */
