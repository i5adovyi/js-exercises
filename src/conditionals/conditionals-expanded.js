/**
 * JavaScript Conditionals Exercises - Expanded Set
 * 
 * This file contains an expanded set of exercises organized by Bloom's Taxonomy and SOLO Taxonomy
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
 * Exercise 1.1: Simple if statement
 * 
 * Determines if a number is positive
 * @param {number} num - The number to check
 * @returns {boolean} True if the number is positive, false otherwise
 */
export function isPositive(num) {
  // TODO: Write a simple if statement that returns true if num is greater than 0
  // and false otherwise
}

/**
 * Exercise 1.2: Basic if-else
 * 
 * Provides a message based on temperature
 * @param {number} temperature - The temperature in Celsius
 * @returns {string} A message describing the temperature
 */
export function getTemperatureMessage(temperature) {
  // TODO: Return "It's hot" if temperature is above 30
  // Return "It's moderate" otherwise
}

/**
 * Exercise 1.3: Check if a number is even
 * 
 * @param {number} num - The number to check
 * @returns {boolean} True if the number is even, false otherwise
 */
export function isEven(num) {
  // TODO: Return true if num is even, false otherwise
  // A number is even if it's divisible by 2 (num % 2 === 0)
}

/**
 * Exercise 1.4: Simple comparison
 * 
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {string} Comparison result
 */
export function compareNumbers(a, b) {
  // TODO: Return "a is greater" if a > b
  // Return "b is greater" if b > a
  // Return "equal" if a === b
}

/**
 * Exercise 1.5: Check password length
 * 
 * @param {string} password - The password to check
 * @returns {boolean} True if the password is at least 8 characters, false otherwise
 */
export function isPasswordValid(password) {
  // TODO: Return true if the password length is at least 8 characters
  // Return false otherwise
}

// ========================================================================
// BLOOM'S LEVEL: UNDERSTAND (Explain ideas or concepts)
// SOLO LEVEL: MULTISTRUCTURAL (Understanding several aspects independently)
// ========================================================================

/**
 * Exercise 2.1: if-else-if chain
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
 * Exercise 2.2: Switch statement
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

/**
 * Exercise 2.3: Traffic light colors
 * 
 * @param {string} color - The current traffic light color
 * @returns {string} The next color in the sequence
 */
export function getNextTrafficLightColor(color) {
  // TODO: Use a switch statement to determine the next traffic light color
  // Red -> Green -> Yellow -> Red
  // Return "Invalid color" for any other input
  // The function should be case-insensitive
}

/**
 * Exercise 2.4: Season classifier
 * 
 * @param {number} month - The month (1-12)
 * @returns {string} The season (Spring, Summer, Fall, Winter)
 */
export function getSeason(month) {
  // TODO: Return the season based on the month number
  // Winter: December (12), January (1), February (2)
  // Spring: March (3), April (4), May (5)
  // Summer: June (6), July (7), August (8)
  // Fall: September (9), October (10), November (11)
  // Return "Invalid month" if the month is not between 1 and 12
}

/**
 * Exercise 2.5: Nested conditionals
 * 
 * @param {number} age - Person's age
 * @param {boolean} hasParentalConsent - Whether they have parental consent
 * @returns {boolean} Whether the person can sign up
 */
export function canSignUp(age, hasParentalConsent) {
  // TODO: Return true if:
  // - The person is 18 or older, OR
  // - The person is at least 13 AND has parental consent
  // Otherwise return false
}

// ========================================================================
// BLOOM'S LEVEL: APPLY (Use information in new situations)
// SOLO LEVEL: RELATIONAL (Integrate parts to understand the whole)
// ========================================================================

/**
 * Exercise 3.1: Logical operators and complex conditions
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
 * Exercise 3.2: Ternary operator
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

/**
 * Exercise 3.3: Ticket pricing
 * 
 * @param {number} age - Customer's age
 * @param {boolean} isStudent - Whether the customer is a student
 * @param {boolean} isVeteran - Whether the customer is a veteran
 * @returns {number} The ticket price
 */
export function getTicketPrice(age, isStudent, isVeteran) {
  // TODO: Calculate ticket price based on these rules:
  // - Base price is $10
  // - Apply only the best discount:
  // - Children (under 12) and seniors (65+): 50% off
  // - Students: 30% off
  // - Veterans: 20% off
}

/**
 * Exercise 3.4: Password strength checker
 * 
 * @param {string} password - The password to check
 * @returns {string} "weak", "medium", or "strong"
 */
export function checkPasswordStrength(password) {
  // TODO: Determine password strength:
  // - "weak": Less than 8 characters
  // - "medium": 8+ characters with only letters and numbers
  // - "strong": 8+ characters with letters, numbers, and at least one special character (!@#$%^&*)
  // Use regex to check for special characters: /[!@#$%^&*]/.test(password)
}

/**
 * Exercise 3.5: Tax calculator
 * 
 * @param {number} income - Annual income
 * @param {string} filingStatus - "single" or "married"
 * @returns {number} Tax amount
 */
export function calculateTax(income, filingStatus) {
  // TODO: Calculate tax based on income and filing status
  // Single:
  // - 10% for income up to $10,000
  // - 15% for income between $10,001 and $40,000
  // - 25% for income above $40,000
  // Married:
  // - 10% for income up to $20,000
  // - 15% for income between $20,001 and $60,000
  // - 25% for income above $60,000
}

// ========================================================================
// BLOOM'S LEVEL: ANALYZE (Draw connections among ideas)
// SOLO LEVEL: RELATIONAL (Integrate parts to understand the whole)
// ========================================================================

/**
 * Exercise 4.1: Truthy and falsy values
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
 * Exercise 4.2: Short-circuit evaluation
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

/**
 * Exercise 4.3: Nullish coalescing
 * 
 * @param {Object} settings - User settings
 * @param {number} [settings.itemsPerPage] - Items per page preference
 * @param {string} [settings.theme] - Theme preference
 * @param {boolean} [settings.notifications] - Notifications preference
 * @returns {Object} Settings with defaults applied
 */
export function applyDefaultSettings(settings) {
  // TODO: Return an object with user settings, applying these defaults:
  // - itemsPerPage: 10 (only if settings.itemsPerPage is null or undefined)
  // - theme: "light" (only if settings.theme is null or undefined)
  // - notifications: true (only if settings.notifications is null or undefined)
  // Use the nullish coalescing operator (??) for this
}

/**
 * Exercise 4.4: Optional chaining
 * 
 * @param {Object} data - API response data
 * @returns {string} User's city or "Unknown"
 */
export function getUserCity(data) {
  // TODO: Safely extract the user's city from the data object
  // Return the city if it exists at data.user.address.city
  // Return "Unknown" if any part of the path is undefined or null
  // Use optional chaining (?.) for this
}

/**
 * Exercise 4.5: Type coercion in conditionals
 * 
 * @param {*} value - Any value to check
 * @returns {string} Description of the value type
 */
export function describeValue(value) {
  // TODO: Return a description of the value based on type coercion rules:
  // - "empty" if the value is falsy but not the number 0
  // - "zero" if the value is exactly 0
  // - "number" if the value is a truthy number
  // - "string" if the value is a truthy string
  // - "boolean" if the value is exactly true or false
  // - "object" if the value is a non-null object
  // - "array" if the value is an array
  // - "other" for any other value
}

// ========================================================================
// BLOOM'S LEVEL: EVALUATE (Justify a stand or decision)
// SOLO LEVEL: EXTENDED ABSTRACT (Generalize learning to new domains)
// ========================================================================

/**
 * Exercise 5.1: Combining multiple conditions
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
 * Exercise 5.2: Error handling with conditionals
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

/**
 * Exercise 5.3: Loan approval
 * 
 * @param {Object} applicant - Loan applicant
 * @param {number} applicant.creditScore - Credit score (300-850)
 * @param {number} applicant.income - Annual income
 * @param {number} applicant.loanAmount - Requested loan amount
 * @param {number} applicant.debtToIncomeRatio - Current debt to income ratio (0-1)
 * @returns {Object} Approval result
 */
export function approveLoan(applicant) {
  // TODO: Determine if the loan is approved and provide feedback
  // Return an object with:
  // - approved: boolean indicating approval
  // - reason: string explaining the decision
  // 
  // Rules:
  // - Approve if: creditScore >= 700 AND income >= 3 * loanAmount AND debtToIncomeRatio < 0.4
  // - Deny with specific reasons otherwise
}

/**
 * Exercise 5.4: Guard clauses
 * 
 * @param {Object} user - User object
 * @param {Object} permissions - Permissions object
 * @param {string} resource - Resource to access
 * @returns {boolean} Whether the user can access the resource
 */
export function canAccessResource(user, permissions, resource) {
  // TODO: Use guard clauses to check if a user can access a resource
  // A guard clause is a conditional that returns early if a condition is not met
  // Check these conditions in sequence, returning false if any fail:
  // 1. user, permissions, and resource must all be defined
  // 2. user must have an 'id' property
  // 3. permissions must have user's id as a property
  // 4. permissions[user.id] must include the resource
  // Return true if all conditions pass
}

/**
 * Exercise 5.5: Form validation
 * 
 * @param {Object} formData - Form data
 * @param {string} formData.email - Email address
 * @param {string} formData.password - Password
 * @param {string} formData.confirmPassword - Confirmed password
 * @returns {Object} Validation result
 */
export function validateForm(formData) {
  // TODO: Validate a form with these rules and return detailed errors
  // Return an object with:
  // - valid: boolean indicating if the form is valid
  // - errors: object with field-specific error messages
  //
  // Rules:
  // - Email must contain @ (simple check)
  // - Password must be at least 8 characters
  // - Password and confirmPassword must match
  // - Only include error messages for fields that have errors
}

// ========================================================================
// BLOOM'S LEVEL: CREATE (Produce new or original work)
// SOLO LEVEL: EXTENDED ABSTRACT (Generalize learning to new domains)
// ========================================================================

/**
 * Exercise 6.1: Advanced pattern matching
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
 * Exercise 6.2: State machine with conditionals
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

/**
 * Exercise 6.3: E-commerce discount rules
 * 
 * @param {Object} cart - Shopping cart
 * @param {Array} cart.items - Array of product objects
 * @param {string} cart.couponCode - Optional coupon code
 * @param {boolean} cart.isLoggedIn - Whether the user is logged in
 * @param {Object} cart.user - User object if logged in
 * @returns {Object} Final price and applied discounts
 */
export function calculateCartTotal(cart) {
  // TODO: Calculate the cart total with multiple discount rules
  // Return an object with:
  // - subtotal: Sum of all item prices before discounts
  // - discounts: Array of applied discount objects (each with name and amount)
  // - total: Final price after all discounts
  //
  // Discount rules (apply all that match):
  // - Quantity discount: 10% off items when buying 3+ of the same item
  // - Coupon: "SAVE10" takes 10% off total, "SAVE20" takes 20% off total
  // - Member discount: 5% for logged-in users with cart.user.membershipLevel === "premium"
  // - Order minimum: $5 off orders over $100
}

/**
 * Exercise 6.4: Permission system
 * 
 * @param {Object} user - User object with roles
 * @param {string} action - Action to perform
 * @param {Object} resource - Resource to act upon
 * @returns {boolean} Whether the action is permitted
 */
export function isActionPermitted(user, action, resource) {
  // TODO: Implement a role-based permission system with ownership logic
  // Rules:
  // - Admins can perform any action on any resource
  // - Editors can create, read, and update any resource but not delete
  // - Authors can create any resource, and read/update/delete their own resources
  // - Guests can only read public resources
  // - A user is the owner of a resource if resource.ownerId === user.id
  // - A resource is public if resource.visibility === "public"
}

/**
 * Exercise 6.5: Decision tree implementation
 * 
 * @param {Object} patient - Patient medical data
 * @returns {string} Treatment recommendation
 */
export function recommendTreatment(patient) {
  // TODO: Implement a medical decision tree for treatment recommendations
  // The patient object contains: age, temperature, symptoms (array), chronicConditions (array)
  // Return a string with the recommended treatment based on these rules:
  // - Fever protocol: If temperature ≥ 38°C
  //   - With "cough" AND "fatigue": "COVID test recommended"
  //   - With "sore throat": "Strep test recommended"
  //   - Otherwise: "Antipyretics recommended"
  // - Pain management: If "headache" or "pain" in symptoms
  //   - With "hypertension" in chronicConditions: "Acetaminophen recommended"
  //   - Otherwise: "NSAIDs recommended"
  // - Pediatric (<18) with "rash": "Pediatric dermatology referral"
  // - Senior (65+) with 3+ symptoms: "Comprehensive evaluation recommended"
  // - Otherwise: "Symptomatic treatment and follow-up as needed"
}