/**
 * Conditionals Exercises - SOLUTIONS
 * 
 * This file contains the solutions to the conditionals exercises.
 * Use this as a reference after attempting to solve the exercises yourself.
 */

// ========================================================================
// BLOOM'S LEVEL: REMEMBER (Recall facts and basic concepts)
// ========================================================================

/**
 * Exercise 1: Simple if statement
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
 * Exercise 2: Basic if-else
 */
export function getTemperatureMessage(temperature) {
  if (temperature > 30) {
    return "It's hot";
  } else {
    return "It's moderate";
  }
}

// ========================================================================
// BLOOM'S LEVEL: UNDERSTAND (Explain ideas or concepts)
// ========================================================================

/**
 * Exercise 3: if-else-if chain
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
 * Exercise 4: Switch statement
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

// ========================================================================
// BLOOM'S LEVEL: APPLY (Use information in new situations)
// ========================================================================

/**
 * Exercise 5: Logical operators and complex conditions
 */
export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Exercise 6: Ternary operator
 */
export function getVotingMessage(age) {
  return age >= 18 ? "You can vote" : "You cannot vote yet";
}

// ========================================================================
// BLOOM'S LEVEL: ANALYZE (Draw connections among ideas)
// ========================================================================

/**
 * Exercise 7: Truthy and falsy values
 */
export function validateUserInput(username, email) {
  if (!username || !email) {
    return "Both fields are required";
  }
  return "Valid input";
}

/**
 * Exercise 8: Short-circuit evaluation
 */
export function getDisplayName(user) {
  return (user.firstName && user.lastName && `${user.firstName} ${user.lastName}`) || 
         user.username || 
         "Anonymous";
}

// ========================================================================
// BLOOM'S LEVEL: EVALUATE (Justify a stand or decision)
// ========================================================================

/**
 * Exercise 9: Combining multiple conditions
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
 * Exercise 10: Error handling with conditionals
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

// ========================================================================
// BLOOM'S LEVEL: CREATE (Produce new or original work)
// ========================================================================

/**
 * Exercise 11: Advanced pattern matching
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
 * Exercise 12: State machine with conditionals
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