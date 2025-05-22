# JavaScript Conditionals Quiz

Test your understanding of JavaScript conditionals with this self-assessment quiz. Questions are organized by complexity level.

## Bloom's Taxonomy Level: Remember

1. Which of the following correctly defines an if statement in JavaScript?
   - A) `if [condition] { }`
   - B) `if (condition) { }`
   - C) `if condition { }`
   - D) `if condition then { }`

2. What will be printed to the console?
   ```javascript
   let x = 10;
   if (x > 5) {
     console.log("Greater");
   } else {
     console.log("Smaller or equal");
   }
   ```
   - A) "Greater"
   - B) "Smaller or equal"
   - C) Nothing
   - D) Error

3. Which operator is used for equality comparison without type conversion?
   - A) `==`
   - B) `===`
   - C) `=`
   - D) `!=`

## Bloom's Taxonomy Level: Understand

4. What will the following code return?
   ```javascript
   function check(num) {
     if (num > 0) {
       return "Positive";
     } else if (num < 0) {
       return "Negative";
     } else {
       return "Zero";
     }
   }
   check(0);
   ```
   - A) "Positive"
   - B) "Negative"
   - C) "Zero"
   - D) undefined

5. Which statement about the switch statement is NOT true?
   - A) The `break` keyword is optional
   - B) Multiple case values can execute the same code
   - C) The `default` case is required
   - D) Case values can be expressions

6. What will be logged to the console?
   ```javascript
   let status = "active";
   switch (status) {
     case "inactive":
       console.log("Not running");
       break;
     case "active":
       console.log("Running");
       break;
     default:
       console.log("Unknown status");
       break;
   }
   ```
   - A) "Not running"
   - B) "Running"
   - C) "Unknown status"
   - D) Nothing

## Bloom's Taxonomy Level: Apply

7. What is the output of the following code?
   ```javascript
   let score = 85;
   let result = score >= 90 ? "A" : 
                score >= 80 ? "B" : 
                score >= 70 ? "C" : "F";
   console.log(result);
   ```
   - A) "A"
   - B) "B"
   - C) "C"
   - D) "F"

8. What will the following code output?
   ```javascript
   function checkYear(year) {
     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
   }
   console.log(checkYear(2000));
   ```
   - A) true
   - B) false
   - C) undefined
   - D) Error

9. What will this code output?
   ```javascript
   let user = { name: "", role: "admin" };
   console.log(user.name || "Anonymous");
   ```
   - A) ""
   - B) "Anonymous"
   - C) undefined
   - D) null

## Bloom's Taxonomy Level: Analyze

10. What's wrong with this code?
    ```javascript
    function getDiscount(isMember) {
      if (isMember = true) {
        return "20%";
      } else {
        return "10%";
      }
    }
    ```
    - A) The function lacks a return statement
    - B) The function uses assignment (`=`) instead of comparison (`===`)
    - C) The else statement is unnecessary
    - D) Nothing is wrong

11. What will the following code output?
    ```javascript
    let x = "";
    let y = 0;
    let z = "0";
    
    console.log(Boolean(x), Boolean(y), Boolean(z));
    ```
    - A) `false false false`
    - B) `false false true`
    - C) `true true true`
    - D) `false true false`

12. What is the result of the expression?
    ```javascript
    null == undefined
    ```
    - A) true
    - B) false
    - C) Error
    - D) undefined

## Bloom's Taxonomy Level: Evaluate

13. Consider this pattern:
    ```javascript
    function getValue(data) {
      return data && data.user && data.user.profile && data.user.profile.name;
    }
    ```
    Which modern JavaScript feature could replace this pattern more elegantly?
    - A) Nullish coalescing operator (`??`)
    - B) Optional chaining (`?.`)
    - C) Spread operator (`...`)
    - D) Rest parameters

14. What is problematic about this code?
    ```javascript
    function processValue(value) {
      if (value == null) {
        return "No value";
      } else if (value == 0) {
        return "Zero";
      } else if (value == "") {
        return "Empty string";
      } else {
        return "Has value";
      }
    }
    ```
    - A) It uses loose equality (`==`) which might cause unexpected behavior
    - B) The function name doesn't describe what it does
    - C) It's missing error handling
    - D) The indentation is incorrect

15. Which approach is better and why?
    
    Approach A:
    ```javascript
    if (user.isLoggedIn === true) {
      showDashboard();
    }
    ```
    
    Approach B:
    ```javascript
    if (user.isLoggedIn) {
      showDashboard();
    }
    ```
    
    - A) Approach A, because it's more explicit
    - B) Approach B, because it leverages truthy/falsy evaluation
    - C) They are exactly the same in all cases
    - D) Neither, both have major flaws

## Bloom's Taxonomy Level: Create

16. Create a single expression that checks if a number is between 1 and 100 (inclusive).
    - A) `num >= 1 || num <= 100`
    - B) `num >= 1 && num <= 100`
    - C) `1 <= num <= 100`
    - D) `num > 0 && num < 101`

17. Which pattern would you use to implement a simple state machine in JavaScript?
    - A) A series of if-else statements
    - B) A switch statement with action-based cases
    - C) An object map with state transitions
    - D) A class with state methods

18. How would you refactor this code to be more maintainable?
    ```javascript
    function getPrice(product, quantity, isVIP) {
      let price = product.basePrice * quantity;
      if (isVIP) {
        price = price * 0.9;
      }
      if (quantity >= 10) {
        price = price * 0.95;
      }
      if (product.category === "electronics") {
        price = price * 1.02;  // 2% tax
      }
      return price;
    }
    ```
    - A) Convert to a switch statement
    - B) Use a single formula with conditional operators
    - C) Extract discount/tax calculations into separate functions
    - D) Use a class-based approach

## Answers

1. B) `if (condition) { }`
2. A) "Greater"
3. B) `===`
4. C) "Zero"
5. C) The `default` case is required
6. B) "Running"
7. B) "B"
8. A) true
9. B) "Anonymous"
10. B) The function uses assignment (`=`) instead of comparison (`===`)
11. B) `false false true`
12. A) true
13. B) Optional chaining (`?.`)
14. A) It uses loose equality (`==`) which might cause unexpected behavior
15. B) Approach B, because it leverages truthy/falsy evaluation
16. B) `num >= 1 && num <= 100`
17. C) An object map with state transitions
18. C) Extract discount/tax calculations into separate functions