/**
 * JavaScript Conditionals Exercises
 * 
 * This file contains exercises organized by Bloom's Taxonomy and SOLO Taxonomy
 * to progressively build understanding of JavaScript conditional statements.
 * 
 * Instructions:
 * 1. Implement each function according to its JSDoc description
 * 2. Run the tests to verify your implementation
 * 3. Move from easier to more challenging exercises
 */

// ========================================================================
// BLOOM'S LEVEL: REMEMBER (Recall facts and basic concepts)
// SOLO LEVEL: UNISTRUCTURAL (Simple understanding of one aspect)
// ========================================================================

/**
 * Exercise 1: Simple if statement
 * 
 * Determines if a number is positive
 * @param {number} num - The number to check
 * @returns {boolean} True if the number is positive, false otherwise
 */
export function isPositive(num) {
  // TODO: Write a simple if statement that returns true if num is greater than 0
  // and false otherwise
  if (num > 0) {
    return true;
  } else {
    return false
  }
}

/**
 * Exercise 2: Basic if-else
 * 
 * Provides a message based on temperature
 * @param {number} temperature - The temperature in Celsius
 * @returns {string} A message describing the temperature
 */
export function getTemperatureMessage(temperature) {
  // TODO: Return "It's hot" if temperature is above 30
  // Return "It's moderate" otherwise
}

// ========================================================================
// BLOOM'S LEVEL: UNDERSTAND (Explain ideas or concepts)
// SOLO LEVEL: MULTISTRUCTURAL (Understanding several aspects independently)
// ========================================================================

/**
 * Exercise 3: if-else-if chain
 * 
 * Determines letter grade based on numerical score
 * @param {number} score - The numerical score (0-100)
 * @returns {string} The letter grade (A, B, C, D, or F)
 */
export function getLetterGrade(score) {
  // TODO: Return "A" if score is 90 or above
  // Return "B" if score is 80-89
  // Return "C" if score is 70-79
  // Return "D" if score is 60-69
  // Return "F" if score is below 60
  // Your solution should use an if-else-if chain
}

/**
 * Exercise 4: Switch statement
 * 
 * Returns information about a day of the week
 * @param {string} day - The day of the week
 * @returns {string} Information about the day
 */
export function getDayInfo(day) {
  // TODO: Use a switch statement to return:
  // "Weekend" for "Saturday" or "Sunday"
  // "Weekday" for "Monday", "Tuesday", "Wednesday", "Thursday", or "Friday"
  // "Invalid day" for any other value
  // The function should be case-insensitive
}

// ========================================================================
// BLOOM'S LEVEL: APPLY (Use information in new situations)
// SOLO LEVEL: RELATIONAL (Integrate parts to understand the whole)
// ========================================================================

/**
 * Exercise 5: Logical operators and complex conditions
 * 
 * Determines if a year is a leap year
 * @param {number} year - The year to check
 * @returns {boolean} True if the year is a leap year, false otherwise
 */
export function isLeapYear(year) {
  // TODO: Implement leap year logic:
  // A leap year is:
  // - Divisible by 4
  // - NOT divisible by 100 UNLESS it's also divisible by 400
  // Use logical operators (&&, ||, !) to implement this logic
}

/**
 * Exercise 6: Ternary operator
 * 
 * Returns a message based on age
 * @param {number} age - The person's age
 * @returns {string} A message about voting eligibility
 */
export function getVotingMessage(age) {
  // TODO: Use a ternary operator to return:
  // "You can vote" if age is 18 or older
  // "You cannot vote yet" if age is under 18
}

// ========================================================================
// BLOOM'S LEVEL: ANALYZE (Draw connections among ideas)
// SOLO LEVEL: RELATIONAL (Integrate parts to understand the whole)
// ========================================================================

/**
 * Exercise 7: Truthy and falsy values
 * 
 * Validates user input for a form
 * @param {string} username - The username input
 * @param {string} email - The email input
 * @returns {string} A validation message
 */
export function validateUserInput(username, email) {
  // TODO: Return "Both fields are required" if either username or email is falsy
  // Return "Valid input" if both are truthy
  // Use implicit type conversion rather than explicit comparisons
}

/**
 * Exercise 8: Short-circuit evaluation
 * 
 * Gets a display name based on available information
 * @param {Object} user - User object
 * @param {string} [user.firstName] - The user's first name
 * @param {string} [user.lastName] - The user's last name
 * @param {string} [user.username] - The user's username
 * @returns {string} The display name
 */
export function getDisplayName(user) {
  // TODO: Use short-circuit evaluation with the || operator to return the first truthy value among:
  // - user's firstName + lastName (if both exist)
  // - user's username
  // - "Anonymous"
  // Don't use if statements
}

// ========================================================================
// BLOOM'S LEVEL: EVALUATE (Justify a stand or decision)
// SOLO LEVEL: EXTENDED ABSTRACT (Generalize learning to new domains)
// ========================================================================

/**
 * Exercise 9: Combining multiple conditions
 * 
 * Determines shipping cost based on location, weight, and expedited preference
 * @param {string} country - The shipping destination
 * @param {number} weight - The package weight in kg
 * @param {boolean} expedited - Whether expedited shipping is requested
 * @returns {number} The shipping cost
 */
export function calculateShippingCost(country, weight, expedited) {
  // TODO: Calculate shipping cost with these rules:
  // - Base cost is $10 for "USA" and $20 for other countries
  // - If weight is over 5kg, add $5. If over 10kg, add $10 instead
  // - If expedited is true, multiply the total cost by 1.5
}

/**
 * Exercise 10: Error handling with conditionals
 * 
 * Safely performs division and handles potential errors
 * @param {number} numerator - The number to be divided
 * @param {number} denominator - The number to divide by
 * @returns {Object} An object with success status and result/error
 */
export function safeDivide(numerator, denominator) {
  // TODO: Return an object with:
  // - success: true if the operation was successful, false otherwise
  // - value: the result of the division if successful
  // - error: an error message if not successful
  //
  // Handle these error cases:
  // - If denominator is 0, return error "Division by zero"
  // - If either input is not a number, return error "Invalid input"
}

// ========================================================================
// BLOOM'S LEVEL: CREATE (Produce new or original work)
// SOLO LEVEL: EXTENDED ABSTRACT (Generalize learning to new domains)
// ========================================================================

/**
 * Exercise 11: Advanced pattern matching
 * 
 * Parses and validates a time string in various formats
 * @param {string} timeString - A string representing time
 * @returns {Object} An object with validity and time components
 */
export function parseTimeString(timeString) {
  // TODO: Parse and validate a time string that could be in these formats:
  // - "HH:MM" (24-hour format)
  // - "HH:MM AM/PM" (12-hour format)
  //
  // Return an object with:
  // - valid: boolean indicating if the time string is valid
  // - hours: number of hours if valid (in 24-hour format)
  // - minutes: number of minutes if valid
  // - error: error message if not valid
}

/**
 * Exercise 12: State machine with conditionals
 * 
 * Implements a simple traffic light state machine
 * @param {string} currentState - The current state of the traffic light
 * @param {string} action - The action to perform
 * @returns {string} The new state of the traffic light
 */
export function trafficLightMachine(currentState, action) {
  // TODO: Implement a state machine for a traffic light with these states:
  // - "green"
  // - "yellow"
  // - "red"
  //
  // And these actions:
  // - "TIMER" (advance to the next state)
  // - "POWER_OUTAGE" (go to the "flashing" state)
  // - "RESET" (go back to "red")
  //
  // If the traffic light is in the "flashing" state:
  // - "POWER_RESTORE" brings it back to "red"
  // - Other actions keep it in "flashing" state
  //
  // Return the new state after applying the action
}