/**
 * JavaScript Conditionals Exercises - SOLUTIONS (Expanded Set)
 * 
 * This file contains the solutions to the expanded conditionals exercises.
 * Use this as a reference after attempting to solve the exercises yourself.
 */

// ========================================================================
// BLOOM'S LEVEL: REMEMBER (Recall facts and basic concepts)
// ========================================================================

/**
 * Exercise 1.1: Simple if statement
 */
export function isPositive(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
  
  // Alternative one-liner:
  // return num > 0;
}

/**
 * Exercise 1.2: Basic if-else
 */
export function getTemperatureMessage(temperature) {
  if (temperature > 30) {
    return "It's hot";
  } else {
    return "It's moderate";
  }
}

/**
 * Exercise 1.3: Check if a number is even
 */
export function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
  
  // Alternative one-liner:
  // return num % 2 === 0;
}

/**
 * Exercise 1.4: Simple comparison
 */
export function compareNumbers(a, b) {
  if (a > b) {
    return "a is greater";
  } else if (b > a) {
    return "b is greater";
  } else {
    return "equal";
  }
}

/**
 * Exercise 1.5: Check password length
 */
export function isPasswordValid(password) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
  
  // Alternative one-liner:
  // return password.length >= 8;
}

// ========================================================================
// BLOOM'S LEVEL: UNDERSTAND (Explain ideas or concepts)
// ========================================================================

/**
 * Exercise 2.1: if-else-if chain
 */
export function getLetterGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/**
 * Exercise 2.2: Switch statement
 */
export function getDayInfo(day) {
  switch (day.toLowerCase()) {
    case "saturday":
    case "sunday":
      return "Weekend";
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "Weekday";
    default:
      return "Invalid day";
  }
}

/**
 * Exercise 2.3: Traffic light colors
 */
export function getNextTrafficLightColor(color) {
  switch (color.toLowerCase()) {
    case "red":
      return "Green";
    case "green":
      return "Yellow";
    case "yellow":
      return "Red";
    default:
      return "Invalid color";
  }
}

/**
 * Exercise 2.4: Season classifier
 */
export function getSeason(month) {
  if (month < 1 || month > 12) {
    return "Invalid month";
  }
  
  if (month === 12 || month === 1 || month === 2) {
    return "Winter";
  } else if (month >= 3 && month <= 5) {
    return "Spring";
  } else if (month >= 6 && month <= 8) {
    return "Summer";
  } else {
    return "Fall";
  }
  
  // Alternative using switch:
  /*
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    case 9:
    case 10:
    case 11:
      return "Fall";
    default:
      return "Invalid month";
  }
  */
}

/**
 * Exercise 2.5: Nested conditionals
 */
export function canSignUp(age, hasParentalConsent) {
  if (age >= 18) {
    return true;
  } else if (age >= 13 && hasParentalConsent) {
    return true;
  } else {
    return false;
  }
  
  // Alternative one-liner:
  // return age >= 18 || (age >= 13 && hasParentalConsent);
}

// ========================================================================
// BLOOM'S LEVEL: APPLY (Use information in new situations)
// ========================================================================

/**
 * Exercise 3.1: Logical operators and complex conditions
 */
export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Exercise 3.2: Ternary operator
 */
export function getVotingMessage(age) {
  return age >= 18 ? "You can vote" : "You cannot vote yet";
}

/**
 * Exercise 3.3: Ticket pricing
 */
export function getTicketPrice(age, isStudent, isVeteran) {
  const basePrice = 10;
  
  if (age < 12 || age >= 65) {
    return basePrice * 0.5; // 50% off
  } else if (isStudent) {
    return basePrice * 0.7; // 30% off
  } else if (isVeteran) {
    return basePrice * 0.8; // 20% off
  } else {
    return basePrice;
  }
}

/**
 * Exercise 3.4: Password strength checker
 */
export function checkPasswordStrength(password) {
  if (password.length < 8) {
    return "weak";
  }
  
  const hasSpecialChar = /[!@#$%^&*]/.test(password);
  
  if (hasSpecialChar) {
    return "strong";
  } else {
    return "medium";
  }
}

/**
 * Exercise 3.5: Tax calculator
 */
export function calculateTax(income, filingStatus) {
  let taxRate, bracket;
  
  if (filingStatus === "single") {
    if (income <= 10000) {
      taxRate = 0.1;
    } else if (income <= 40000) {
      taxRate = 0.15;
    } else {
      taxRate = 0.25;
    }
  } else { // married
    if (income <= 20000) {
      taxRate = 0.1;
    } else if (income <= 60000) {
      taxRate = 0.15;
    } else {
      taxRate = 0.25;
    }
  }
  
  return income * taxRate;
}

// ========================================================================
// BLOOM'S LEVEL: ANALYZE (Draw connections among ideas)
// ========================================================================

/**
 * Exercise 4.1: Truthy and falsy values
 */
export function validateUserInput(username, email) {
  if (!username || !email) {
    return "Both fields are required";
  }
  return "Valid input";
}

/**
 * Exercise 4.2: Short-circuit evaluation
 */
export function getDisplayName(user) {
  return (user.firstName && user.lastName && `${user.firstName} ${user.lastName}`) || 
         user.username || 
         "Anonymous";
}

/**
 * Exercise 4.3: Nullish coalescing
 */
export function applyDefaultSettings(settings = {}) {
  return {
    itemsPerPage: settings.itemsPerPage ?? 10,
    theme: settings.theme ?? "light",
    notifications: settings.notifications ?? true
  };
}

/**
 * Exercise 4.4: Optional chaining
 */
export function getUserCity(data) {
  return data?.user?.address?.city ?? "Unknown";
}

/**
 * Exercise 4.5: Type coercion in conditionals
 */
export function describeValue(value) {
  if (value === 0) {
    return "zero";
  }
  
  if (!value) {
    return "empty";
  }
  
  if (typeof value === 'number') {
    return "number";
  }
  
  if (typeof value === 'string') {
    return "string";
  }
  
  if (typeof value === 'boolean') {
    return "boolean";
  }
  
  if (Array.isArray(value)) {
    return "array";
  }
  
  if (typeof value === 'object' && value !== null) {
    return "object";
  }
  
  return "other";
}

// ========================================================================
// BLOOM'S LEVEL: EVALUATE (Justify a stand or decision)
// ========================================================================

/**
 * Exercise 5.1: Combining multiple conditions
 */
export function calculateShippingCost(country, weight, expedited) {
  let cost = country.toUpperCase() === "USA" ? 10 : 20;
  
  if (weight > 10) {
    cost += 10;
  } else if (weight > 5) {
    cost += 5;
  }
  
  if (expedited) {
    cost *= 1.5;
  }
  
  return cost;
}

/**
 * Exercise 5.2: Error handling with conditionals
 */
export function safeDivide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    return {
      success: false,
      error: "Invalid input"
    };
  }
  
  if (denominator === 0) {
    return {
      success: false,
      error: "Division by zero"
    };
  }
  
  return {
    success: true,
    value: numerator / denominator
  };
}

/**
 * Exercise 5.3: Loan approval
 */
export function approveLoan(applicant) {
  const { creditScore, income, loanAmount, debtToIncomeRatio } = applicant;
  
  if (creditScore < 700) {
    return {
      approved: false,
      reason: "Credit score too low"
    };
  }
  
  if (income < 3 * loanAmount) {
    return {
      approved: false,
      reason: "Insufficient income for requested loan amount"
    };
  }
  
  if (debtToIncomeRatio >= 0.4) {
    return {
      approved: false,
      reason: "Debt-to-income ratio too high"
    };
  }
  
  return {
    approved: true,
    reason: "All criteria met"
  };
}

/**
 * Exercise 5.4: Guard clauses
 */
export function canAccessResource(user, permissions, resource) {
  // Guard clause 1: Check if all parameters are defined
  if (!user || !permissions || !resource) {
    return false;
  }
  
  // Guard clause 2: Check if user has an id
  if (!user.id) {
    return false;
  }
  
  // Guard clause 3: Check if permissions has user's id
  if (!permissions[user.id]) {
    return false;
  }
  
  // Guard clause 4: Check if user has permission for the resource
  if (!permissions[user.id].includes(resource)) {
    return false;
  }
  
  // If we get here, all conditions passed
  return true;
}

/**
 * Exercise 5.5: Form validation
 */
export function validateForm(formData) {
  const errors = {};
  
  // Validate email
  if (!formData.email || !formData.email.includes('@')) {
    errors.email = "Valid email is required";
  }
  
  // Validate password
  if (!formData.password || formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  
  // Validate password confirmation
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

// ========================================================================
// BLOOM'S LEVEL: CREATE (Produce new or original work)
// ========================================================================

/**
 * Exercise 6.1: Advanced pattern matching
 */
export function parseTimeString(timeString) {
  if (!timeString || typeof timeString !== 'string') {
    return {
      valid: false,
      error: "Invalid input"
    };
  }
  
  // Try to match 24-hour format
  let match = timeString.match(/^(\d{1,2}):(\d{2})$/);
  if (match) {
    const hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    
    if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
      return {
        valid: true,
        hours,
        minutes
      };
    } else {
      return {
        valid: false,
        error: "Invalid time values"
      };
    }
  }
  
  // Try to match 12-hour format
  match = timeString.match(/^(\d{1,2}):(\d{2})\s+(AM|PM|am|pm)$/);
  if (match) {
    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const period = match[3].toUpperCase();
    
    if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
      return {
        valid: false,
        error: "Invalid time values"
      };
    }
    
    // Convert to 24-hour format
    if (period === "PM" && hours < 12) {
      hours += 12;
    } else if (period === "AM" && hours === 12) {
      hours = 0;
    }
    
    return {
      valid: true,
      hours,
      minutes
    };
  }
  
  return {
    valid: false,
    error: "Unrecognized time format"
  };
}

/**
 * Exercise 6.2: State machine with conditionals
 */
export function trafficLightMachine(currentState, action) {
  // Default state if current state is invalid
  if (!["green", "yellow", "red", "flashing"].includes(currentState)) {
    return "red";
  }
  
  // Handle actions
  switch (action) {
    case "TIMER":
      if (currentState === "green") return "yellow";
      if (currentState === "yellow") return "red";
      if (currentState === "red") return "green";
      return currentState; // Flashing state doesn't change with TIMER
      
    case "POWER_OUTAGE":
      return "flashing";
      
    case "RESET":
      return "red";
      
    case "POWER_RESTORE":
      return currentState === "flashing" ? "red" : currentState;
      
    default:
      return currentState; // Unknown action doesn't change state
  }
}

/**
 * Exercise 6.3: E-commerce discount rules
 */
export function calculateCartTotal(cart) {
  // Calculate subtotal
  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const discounts = [];
  let total = subtotal;
  
  // Check for quantity discounts
  cart.items.forEach(item => {
    if (item.quantity >= 3) {
      const discount = item.price * item.quantity * 0.1;
      discounts.push({
        name: `Quantity discount (${item.name})`,
        amount: discount
      });
      total -= discount;
    }
  });
  
  // Apply coupon if valid
  if (cart.couponCode) {
    if (cart.couponCode === "SAVE10") {
      const discount = subtotal * 0.1;
      discounts.push({
        name: "Coupon (SAVE10)",
        amount: discount
      });
      total -= discount;
    } else if (cart.couponCode === "SAVE20") {
      const discount = subtotal * 0.2;
      discounts.push({
        name: "Coupon (SAVE20)",
        amount: discount
      });
      total -= discount;
    }
  }
  
  // Apply membership discount
  if (cart.isLoggedIn && cart.user && cart.user.membershipLevel === "premium") {
    const discount = subtotal * 0.05;
    discounts.push({
      name: "Premium member discount",
      amount: discount
    });
    total -= discount;
  }
  
  // Apply order minimum discount
  if (subtotal > 100) {
    discounts.push({
      name: "Order minimum discount",
      amount: 5
    });
    total -= 5;
  }
  
  return {
    subtotal,
    discounts,
    total: Math.max(0, total) // Ensure total doesn't go negative
  };
}

/**
 * Exercise 6.4: Permission system
 */
export function isActionPermitted(user, action, resource) {
  // Admin role has full access
  if (user.roles.includes("admin")) {
    return true;
  }
  
  // Editor role can do everything except delete
  if (user.roles.includes("editor")) {
    return action !== "delete";
  }
  
  // Author role
  if (user.roles.includes("author")) {
    if (action === "create") {
      return true;
    }
    
    const isOwner = resource.ownerId === user.id;
    return isOwner;
  }
  
  // Guest role can only read public resources
  if (user.roles.includes("guest")) {
    return action === "read" && resource.visibility === "public";
  }
  
  // Default deny
  return false;
}

/**
 * Exercise 6.5: Decision tree implementation
 */
export function recommendTreatment(patient) {
  const { age, temperature, symptoms, chronicConditions } = patient;
  
  // Fever protocol
  if (temperature >= 38) {
    if (symptoms.includes("cough") && symptoms.includes("fatigue")) {
      return "COVID test recommended";
    }
    
    if (symptoms.includes("sore throat")) {
      return "Strep test recommended";
    }
    
    return "Antipyretics recommended";
  }
  
  // Pain management
  if (symptoms.includes("headache") || symptoms.includes("pain")) {
    if (chronicConditions.includes("hypertension")) {
      return "Acetaminophen recommended";
    } else {
      return "NSAIDs recommended";
    }
  }
  
  // Pediatric with rash
  if (age < 18 && symptoms.includes("rash")) {
    return "Pediatric dermatology referral";
  }
  
  // Senior with multiple symptoms
  if (age >= 65 && symptoms.length >= 3) {
    return "Comprehensive evaluation recommended";
  }
  
  // Default recommendation
  return "Symptomatic treatment and follow-up as needed";
}