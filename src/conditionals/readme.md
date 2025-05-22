# JavaScript Conditionals

Conditional statements are fundamental building blocks in programming that allow code to make decisions and execute different actions based on different conditions.

## Table of Contents

1. [Introduction to Conditionals](#introduction-to-conditionals)
2. [Types of Conditional Statements](#types-of-conditional-statements)
3. [Comparison Operators](#comparison-operators)
4. [Logical Operators](#logical-operators)
5. [Truthy and Falsy Values](#truthy-and-falsy-values)
6. [Conditional (Ternary) Operator](#conditional-ternary-operator)
7. [Switch Statements](#switch-statements)
8. [Advanced Patterns](#advanced-patterns)
9. [Exercises by Taxonomy Level](#exercises-by-taxonomy-level)
10. [Additional Resources](#additional-resources)

## Introduction to Conditionals

Conditionals execute different code blocks based on whether a specified condition evaluates to true or false. They are essential for creating dynamic, responsive programs that can handle different scenarios.

```javascript
// Basic if statement
if (condition) {
  // Code to execute when condition is true
}
```

## Types of Conditional Statements

### 1. if Statement

The simplest conditional that runs code if a condition is true.

```javascript
if (temperature > 30) {
  console.log("It's hot outside!");
}
```

### 2. if...else Statement

Provides an alternative code block to execute when the condition is false.

```javascript
if (isRaining) {
  console.log("Bring an umbrella");
} else {
  console.log("Enjoy the sunshine");
}
```

### 3. if...else if...else Statement

Checks multiple conditions in sequence.

```javascript
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

## Comparison Operators

Operators used in conditions to compare values:

| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Equal to (value) | `5 == "5"` is `true` |
| `===` | Equal to (value and type) | `5 === "5"` is `false` |
| `!=` | Not equal to (value) | `5 != "6"` is `true` |
| `!==` | Not equal to (value and type) | `5 !== "5"` is `true` |
| `>` | Greater than | `10 > 5` is `true` |
| `<` | Less than | `5 < 10` is `true` |
| `>=` | Greater than or equal to | `10 >= 10` is `true` |
| `<=` | Less than or equal to | `5 <= 5` is `true` |

## Logical Operators

Combine multiple conditions:

| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | AND - Both conditions must be true | `(x > 5 && y < 10)` |
| `\|\|` | OR - At least one condition must be true | `(x > 5 \|\| y < 10)` |
| `!` | NOT - Negates a condition | `!(x > 5)` |

## Truthy and Falsy Values

JavaScript values are either "truthy" or "falsy" when evaluated in a boolean context.

### Falsy values:
- `false`
- `0` (zero)
- `''` or `""` (empty string)
- `null`
- `undefined`
- `NaN` (Not a Number)

### Truthy values:
- Everything else, including:
  - `true`
  - Any number other than 0
  - Non-empty strings
  - Arrays (even empty ones)
  - Objects (even empty ones)
  - Functions

```javascript
// Using truthy/falsy values in conditionals
if (username) {
  // Runs if username is not empty, null, or undefined
  console.log(`Welcome, ${username}!`);
} else {
  console.log("Please enter a username");
}
```

## Conditional (Ternary) Operator

A shorthand for simple if-else statements.

Syntax: `condition ? expressionIfTrue : expressionIfFalse`

```javascript
const message = age >= 18 ? "You can vote" : "You cannot vote yet";
```

## Switch Statements

Evaluate an expression against multiple possible case values.

```javascript
switch (dayOfWeek) {
  case 'Monday':
    console.log("Start of the work week");
    break;
  case 'Friday':
    console.log("End of the work week");
    break;
  case 'Saturday':
  case 'Sunday':
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek");
    break;
}
```

## Advanced Patterns

### 1. Short-Circuit Evaluation

Using logical operators for concise conditionals:

```javascript
// Using AND for conditional execution
isLoggedIn && showDashboard();

// Using OR for default values
const username = inputValue || 'Guest';
```

### 2. Nullish Coalescing Operator

Similar to OR but only for `null` or `undefined`:

```javascript
const count = userCount ?? 0; // Uses 0 only if userCount is null or undefined
```

### 3. Optional Chaining

Safe property access that prevents errors:

```javascript
const userName = user?.profile?.name; // Won't error if user or profile is null/undefined
```

## Exercises by Taxonomy Level

The exercises are organized according to **Bloom's Taxonomy** (cognitive complexity) and **SOLO Taxonomy** (structural complexity):

### Bloom's Taxonomy Levels:
1. **Remember**: Recall facts and basic concepts
2. **Understand**: Explain ideas or concepts
3. **Apply**: Use information in new situations
4. **Analyze**: Draw connections among ideas
5. **Evaluate**: Justify a stand or decision
6. **Create**: Produce new or original work

### SOLO Taxonomy Levels:
1. **Prestructural**: Minimal understanding, missing the point
2. **Unistructural**: Simple understanding of one aspect
3. **Multistructural**: Understanding several aspects but independently
4. **Relational**: Integrate parts to understand the whole
5. **Extended Abstract**: Generalize learning to new domains

## Additional Resources

- [MDN Web Docs: Making decisions in your code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [JavaScript.info: Conditional branching](https://javascript.info/ifelse)
- [W3Schools: JavaScript Conditions](https://www.w3schools.com/js/js_if_else.asp)