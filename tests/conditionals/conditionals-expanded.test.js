import {
  // REMEMBER level
  isPositive,
  getTemperatureMessage,
  isEven,
  compareNumbers,
  isPasswordValid,
  
  // UNDERSTAND level
  getLetterGrade,
  getDayInfo,
  getNextTrafficLightColor,
  getSeason,
  canSignUp,
  
  // APPLY level
  isLeapYear,
  getVotingMessage,
  getTicketPrice,
  checkPasswordStrength,
  calculateTax,
  
  // ANALYZE level
  validateUserInput,
  getDisplayName,
  applyDefaultSettings,
  getUserCity,
  describeValue,
  
  // EVALUATE level
  calculateShippingCost,
  safeDivide,
  approveLoan,
  canAccessResource,
  validateForm,
  
  // CREATE level
  parseTimeString,
  trafficLightMachine,
  calculateCartTotal,
  isActionPermitted,
  recommendTreatment
} from '../../src/conditionals/conditionals-expanded.js';

// ========================================================================
// Tests for REMEMBER level exercises
// ========================================================================

describe('Basic Conditionals (REMEMBER Level)', () => {
  describe('isPositive', () => {
    it('should return true for positive numbers', () => {
      expect(isPositive(5)).toBe(true);
      expect(isPositive(0.1)).toBe(true);
      expect(isPositive(Infinity)).toBe(true);
    });

    it('should return false for zero and negative numbers', () => {
      expect(isPositive(0)).toBe(false);
      expect(isPositive(-5)).toBe(false);
      expect(isPositive(-0.1)).toBe(false);
      expect(isPositive(-Infinity)).toBe(false);
    });
  });

  describe('getTemperatureMessage', () => {
    it('should return hot message for temperatures above 30', () => {
      expect(getTemperatureMessage(31)).toBe("It's hot");
      expect(getTemperatureMessage(40)).toBe("It's hot");
    });

    it('should return moderate message for temperatures 30 and below', () => {
      expect(getTemperatureMessage(30)).toBe("It's moderate");
      expect(getTemperatureMessage(20)).toBe("It's moderate");
      expect(getTemperatureMessage(-10)).toBe("It's moderate");
    });
  });

  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-4)).toBe(true);
      expect(isEven(100)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(-3)).toBe(false);
      expect(isEven(99)).toBe(false);
    });
  });

  describe('compareNumbers', () => {
    it('should correctly compare two different numbers', () => {
      expect(compareNumbers(5, 3)).toBe("a is greater");
      expect(compareNumbers(2, 7)).toBe("b is greater");
    });

    it('should handle equal numbers', () => {
      expect(compareNumbers(4, 4)).toBe("equal");
      expect(compareNumbers(0, 0)).toBe("equal");
      expect(compareNumbers(-5, -5)).toBe("equal");
    });
  });

  describe('isPasswordValid', () => {
    it('should validate passwords with at least 8 characters', () => {
      expect(isPasswordValid("password123")).toBe(true);
      expect(isPasswordValid("12345678")).toBe(true);
      expect(isPasswordValid("abcdefgh")).toBe(true);
    });

    it('should reject passwords with less than 8 characters', () => {
      expect(isPasswordValid("short")).toBe(false);
      expect(isPasswordValid("1234567")).toBe(false);
      expect(isPasswordValid("")).toBe(false);
    });
  });
});

// ========================================================================
// Tests for UNDERSTAND level exercises
// ========================================================================

describe('Intermediate Conditionals (UNDERSTAND Level)', () => {
  describe('getLetterGrade', () => {
    it('should return A for scores 90 and above', () => {
      expect(getLetterGrade(90)).toBe('A');
      expect(getLetterGrade(95)).toBe('A');
      expect(getLetterGrade(100)).toBe('A');
    });

    it('should return B for scores 80-89', () => {
      expect(getLetterGrade(80)).toBe('B');
      expect(getLetterGrade(85)).toBe('B');
      expect(getLetterGrade(89)).toBe('B');
    });

    it('should return C for scores 70-79', () => {
      expect(getLetterGrade(70)).toBe('C');
      expect(getLetterGrade(75)).toBe('C');
      expect(getLetterGrade(79)).toBe('C');
    });

    it('should return D for scores 60-69', () => {
      expect(getLetterGrade(60)).toBe('D');
      expect(getLetterGrade(65)).toBe('D');
      expect(getLetterGrade(69)).toBe('D');
    });

    it('should return F for scores below 60', () => {
      expect(getLetterGrade(59)).toBe('F');
      expect(getLetterGrade(30)).toBe('F');
      expect(getLetterGrade(0)).toBe('F');
    });
  });

  describe('getDayInfo', () => {
    it('should return Weekend for Saturday and Sunday', () => {
      expect(getDayInfo('Saturday')).toBe('Weekend');
      expect(getDayInfo('sunday')).toBe('Weekend');
    });

    it('should return Weekday for Monday through Friday', () => {
      expect(getDayInfo('Monday')).toBe('Weekday');
      expect(getDayInfo('tuesday')).toBe('Weekday');
      expect(getDayInfo('Wednesday')).toBe('Weekday');
      expect(getDayInfo('thursday')).toBe('Weekday');
      expect(getDayInfo('Friday')).toBe('Weekday');
    });

    it('should return Invalid day for non-days', () => {
      expect(getDayInfo('Someday')).toBe('Invalid day');
      expect(getDayInfo('')).toBe('Invalid day');
    });

    it('should be case-insensitive', () => {
      expect(getDayInfo('MONDAY')).toBe('Weekday');
      expect(getDayInfo('sunday')).toBe('Weekend');
    });
  });

  describe('getNextTrafficLightColor', () => {
    it('should return the next color in the sequence', () => {
      expect(getNextTrafficLightColor('Red')).toBe('Green');
      expect(getNextTrafficLightColor('Green')).toBe('Yellow');
      expect(getNextTrafficLightColor('Yellow')).toBe('Red');
    });

    it('should handle case-insensitive input', () => {
      expect(getNextTrafficLightColor('red')).toBe('Green');
      expect(getNextTrafficLightColor('GREEN')).toBe('Yellow');
      expect(getNextTrafficLightColor('yElLoW')).toBe('Red');
    });

    it('should return Invalid color for invalid inputs', () => {
      expect(getNextTrafficLightColor('Blue')).toBe('Invalid color');
      expect(getNextTrafficLightColor('')).toBe('Invalid color');
    });
  });

  describe('getSeason', () => {
    it('should return the correct season for each month', () => {
      // Winter
      expect(getSeason(12)).toBe('Winter');
      expect(getSeason(1)).toBe('Winter');
      expect(getSeason(2)).toBe('Winter');
      
      // Spring
      expect(getSeason(3)).toBe('Spring');
      expect(getSeason(4)).toBe('Spring');
      expect(getSeason(5)).toBe('Spring');
      
      // Summer
      expect(getSeason(6)).toBe('Summer');
      expect(getSeason(7)).toBe('Summer');
      expect(getSeason(8)).toBe('Summer');
      
      // Fall
      expect(getSeason(9)).toBe('Fall');
      expect(getSeason(10)).toBe('Fall');
      expect(getSeason(11)).toBe('Fall');
    });

    it('should return Invalid month for out-of-range inputs', () => {
      expect(getSeason(0)).toBe('Invalid month');
      expect(getSeason(13)).toBe('Invalid month');
      expect(getSeason(-1)).toBe('Invalid month');
    });
  });

  describe('canSignUp', () => {
    it('should allow anyone 18 or older to sign up', () => {
      expect(canSignUp(18, false)).toBe(true);
      expect(canSignUp(25, false)).toBe(true);
      expect(canSignUp(18, true)).toBe(true); // Parental consent doesn't matter if 18+
    });

    it('should allow teens 13-17 with parental consent', () => {
      expect(canSignUp(13, true)).toBe(true);
      expect(canSignUp(16, true)).toBe(true);
    });

    it('should deny teens 13-17 without parental consent', () => {
      expect(canSignUp(13, false)).toBe(false);
      expect(canSignUp(16, false)).toBe(false);
    });

    it('should deny children under 13 regardless of consent', () => {
      expect(canSignUp(12, true)).toBe(false);
      expect(canSignUp(10, false)).toBe(false);
    });
  });
});

// ========================================================================
// Tests for APPLY level exercises
// ========================================================================

describe('Applied Conditionals (APPLY Level)', () => {
  describe('isLeapYear', () => {
    it('should return true for years divisible by 4 but not by 100', () => {
      expect(isLeapYear(2004)).toBe(true);
      expect(isLeapYear(2008)).toBe(true);
      expect(isLeapYear(2012)).toBe(true);
    });

    it('should return false for years divisible by 100 but not by 400', () => {
      expect(isLeapYear(1900)).toBe(false);
      expect(isLeapYear(1800)).toBe(false);
      expect(isLeapYear(2100)).toBe(false);
    });

    it('should return true for years divisible by 400', () => {
      expect(isLeapYear(2000)).toBe(true);
      expect(isLeapYear(1600)).toBe(true);
      expect(isLeapYear(2400)).toBe(true);
    });

    it('should return false for non-leap years', () => {
      expect(isLeapYear(2001)).toBe(false);
      expect(isLeapYear(2002)).toBe(false);
      expect(isLeapYear(2003)).toBe(false);
    });
  });

  describe('getVotingMessage', () => {
    it('should return voting eligibility message based on age', () => {
      expect(getVotingMessage(18)).toBe('You can vote');
      expect(getVotingMessage(21)).toBe('You can vote');
      expect(getVotingMessage(17)).toBe('You cannot vote yet');
      expect(getVotingMessage(16)).toBe('You cannot vote yet');
    });

    it('should handle edge cases', () => {
      expect(getVotingMessage(17.9)).toBe('You cannot vote yet');
      expect(getVotingMessage(18.0)).toBe('You can vote');
    });
  });

  describe('getTicketPrice', () => {
    it('should apply child discount (50% off)', () => {
      expect(getTicketPrice(5, false, false)).toBe(5); // 50% off $10
      expect(getTicketPrice(11, false, false)).toBe(5);
    });

    it('should apply senior discount (50% off)', () => {
      expect(getTicketPrice(65, false, false)).toBe(5); // 50% off $10
      expect(getTicketPrice(80, false, false)).toBe(5);
    });

    it('should apply student discount (30% off) when not a child or senior', () => {
      expect(getTicketPrice(20, true, false)).toBe(7); // 30% off $10
    });

    it('should apply veteran discount (20% off) when not a child, senior, or student', () => {
      expect(getTicketPrice(40, false, true)).toBe(8); // 20% off $10
    });

    it('should apply best discount when multiple apply', () => {
      // Child discount (50%) beats student (30%) and veteran (20%)
      expect(getTicketPrice(10, true, true)).toBe(5);
      
      // Senior discount (50%) beats student (30%) and veteran (20%)
      expect(getTicketPrice(70, true, true)).toBe(5);
    });

    it('should charge full price when no discounts apply', () => {
      expect(getTicketPrice(30, false, false)).toBe(10);
    });
  });

  describe('checkPasswordStrength', () => {
    it('should identify weak passwords', () => {
      expect(checkPasswordStrength('pass')).toBe('weak');
      expect(checkPasswordStrength('1234567')).toBe('weak');
    });

    it('should identify medium passwords', () => {
      expect(checkPasswordStrength('password123')).toBe('medium');
      expect(checkPasswordStrength('abcdefghi')).toBe('medium');
      expect(checkPasswordStrength('12345678')).toBe('medium');
    });

    it('should identify strong passwords', () => {
      expect(checkPasswordStrength('password!')).toBe('strong');
      expect(checkPasswordStrength('Secret@123')).toBe('strong');
      expect(checkPasswordStrength('abc123&*%')).toBe('strong');
    });
  });

  describe('calculateTax', () => {
    it('should calculate tax correctly for single filers', () => {
      // 10% bracket
      expect(calculateTax(5000, 'single')).toBe(500); // 10% of 5000
      expect(calculateTax(10000, 'single')).toBe(1000); // 10% of 10000
      
      // 15% bracket
      expect(calculateTax(25000, 'single')).toBe(3750); // 15% of 25000
      expect(calculateTax(40000, 'single')).toBe(6000); // 15% of 40000
      
      // 25% bracket
      expect(calculateTax(50000, 'single')).toBe(12500); // 25% of 50000
      expect(calculateTax(100000, 'single')).toBe(25000); // 25% of 100000
    });

    it('should calculate tax correctly for married filers', () => {
      // 10% bracket
      expect(calculateTax(15000, 'married')).toBe(1500); // 10% of 15000
      expect(calculateTax(20000, 'married')).toBe(2000); // 10% of 20000
      
      // 15% bracket
      expect(calculateTax(40000, 'married')).toBe(6000); // 15% of 40000
      expect(calculateTax(60000, 'married')).toBe(9000); // 15% of 60000
      
      // 25% bracket
      expect(calculateTax(80000, 'married')).toBe(20000); // 25% of 80000
      expect(calculateTax(120000, 'married')).toBe(30000); // 25% of 120000
    });
  });
});

// ========================================================================
// Tests for ANALYZE level exercises
// ========================================================================

describe('Advanced Conditionals (ANALYZE Level)', () => {
  describe('validateUserInput', () => {
    it('should validate when both fields are present', () => {
      expect(validateUserInput('user', 'email@example.com')).toBe('Valid input');
    });

    it('should require both fields', () => {
      expect(validateUserInput('', 'email@example.com')).toBe('Both fields are required');
      expect(validateUserInput('user', '')).toBe('Both fields are required');
      expect(validateUserInput('', '')).toBe('Both fields are required');
    });

    it('should handle falsy values correctly', () => {
      expect(validateUserInput(null, 'email')).toBe('Both fields are required');
      expect(validateUserInput('user', undefined)).toBe('Both fields are required');
      expect(validateUserInput(0, false)).toBe('Both fields are required');
    });
  });

  describe('getDisplayName', () => {
    it('should return full name if both first and last name exist', () => {
      expect(getDisplayName({ firstName: 'John', lastName: 'Doe', username: 'johnd' }))
        .toBe('John Doe');
    });

    it('should return username if full name is not available', () => {
      expect(getDisplayName({ firstName: '', lastName: '', username: 'johnd' }))
        .toBe('johnd');
      expect(getDisplayName({ username: 'johnd' })).toBe('johnd');
    });

    it('should return Anonymous if no user info is available', () => {
      expect(getDisplayName({})).toBe('Anonymous');
    });

    it('should handle partial names correctly', () => {
      expect(getDisplayName({ firstName: 'John' })).toBe('Anonymous');
      expect(getDisplayName({ lastName: 'Doe' })).toBe('Anonymous');
    });
  });

  describe('applyDefaultSettings', () => {
    it('should use default values for missing settings', () => {
      expect(applyDefaultSettings({})).toEqual({
        itemsPerPage: 10,
        theme: 'light',
        notifications: true
      });
    });

    it('should preserve user settings when available', () => {
      const userSettings = {
        itemsPerPage: 25,
        theme: 'dark',
        notifications: false
      };
      
      expect(applyDefaultSettings(userSettings)).toEqual(userSettings);
    });

    it('should handle partially defined settings', () => {
      expect(applyDefaultSettings({ theme: 'dark' })).toEqual({
        itemsPerPage: 10,
        theme: 'dark',
        notifications: true
      });
    });

    it('should handle null values correctly', () => {
      expect(applyDefaultSettings({ itemsPerPage: null })).toEqual({
        itemsPerPage: 10,
        theme: 'light',
        notifications: true
      });
    });

    it('should keep falsy values that are not null or undefined', () => {
      expect(applyDefaultSettings({ notifications: false })).toEqual({
        itemsPerPage: 10,
        theme: 'light',
        notifications: false
      });
    });
  });

  describe('getUserCity', () => {
    it('should return the city when the full path exists', () => {
      const data = {
        user: {
          address: {
            city: 'New York'
          }
        }
      };
      
      expect(getUserCity(data)).toBe('New York');
    });

    it('should return Unknown when any part of the path is missing', () => {
      expect(getUserCity({})).toBe('Unknown');
      expect(getUserCity({ user: {} })).toBe('Unknown');
      expect(getUserCity({ user: { address: {} } })).toBe('Unknown');
      expect(getUserCity(null)).toBe('Unknown');
    });

    it('should handle null or undefined values in the path', () => {
      expect(getUserCity({ user: null })).toBe('Unknown');
      expect(getUserCity({ user: { address: null } })).toBe('Unknown');
    });
  });

  describe('describeValue', () => {
    it('should identify empty values', () => {
      expect(describeValue('')).toBe('empty');
      expect(describeValue(null)).toBe('empty');
      expect(describeValue(undefined)).toBe('empty');
      expect(describeValue(NaN)).toBe('empty');
      expect(describeValue(false)).toBe('boolean'); // Not empty, it's a boolean
    });

    it('should identify zero separately from other numbers', () => {
      expect(describeValue(0)).toBe('zero');
    });

    it('should identify different types correctly', () => {
      expect(describeValue(42)).toBe('number');
      expect(describeValue('hello')).toBe('string');
      expect(describeValue(true)).toBe('boolean');
      expect(describeValue(false)).toBe('boolean');
      expect(describeValue([1, 2, 3])).toBe('array');
      expect(describeValue({})).toBe('object');
      expect(describeValue({ name: 'John' })).toBe('object');
    });

    it('should distinguish between arrays and objects', () => {
      expect(describeValue([])).toBe('array');
      expect(describeValue({})).toBe('object');
    });
  });
});

// ========================================================================
// Tests for EVALUATE level exercises
// ========================================================================

describe('Complex Conditionals (EVALUATE Level)', () => {
  describe('calculateShippingCost', () => {
    it('should calculate basic shipping cost based on country', () => {
      expect(calculateShippingCost('USA', 2, false)).toBe(10);
      expect(calculateShippingCost('Canada', 2, false)).toBe(20);
    });

    it('should add weight surcharges correctly', () => {
      expect(calculateShippingCost('USA', 6, false)).toBe(15); // USA + over 5kg
      expect(calculateShippingCost('USA', 11, false)).toBe(20); // USA + over 10kg
      expect(calculateShippingCost('Canada', 6, false)).toBe(25); // Other + over 5kg
      expect(calculateShippingCost('Canada', 11, false)).toBe(30); // Other + over 10kg
    });

    it('should apply expedited multiplier correctly', () => {
      expect(calculateShippingCost('USA', 2, true)).toBe(15); // USA basic, expedited
      expect(calculateShippingCost('USA', 6, true)).toBe(22.5); // USA + over 5kg, expedited
      expect(calculateShippingCost('Canada', 11, true)).toBe(45); // Other + over 10kg, expedited
    });

    it('should be case-insensitive for country', () => {
      expect(calculateShippingCost('usa', 2, false)).toBe(10);
      expect(calculateShippingCost('UsA', 2, false)).toBe(10);
    });
  });

  describe('safeDivide', () => {
    it('should perform division correctly for valid inputs', () => {
      expect(safeDivide(10, 2)).toEqual({ success: true, value: 5 });
      expect(safeDivide(-10, 5)).toEqual({ success: true, value: -2 });
      expect(safeDivide(7, 2)).toEqual({ success: true, value: 3.5 });
    });

    it('should handle division by zero', () => {
      expect(safeDivide(10, 0)).toEqual({ 
        success: false, 
        error: 'Division by zero' 
      });
    });

    it('should validate input types', () => {
      expect(safeDivide('10', 2)).toEqual({ 
        success: false, 
        error: 'Invalid input' 
      });
      expect(safeDivide(10, '2')).toEqual({ 
        success: false, 
        error: 'Invalid input' 
      });
      expect(safeDivide(null, undefined)).toEqual({ 
        success: false, 
        error: 'Invalid input' 
      });
    });
  });

  describe('approveLoan', () => {
    it('should approve loans meeting all criteria', () => {
      const goodApplicant = {
        creditScore: 750,
        income: 100000,
        loanAmount: 30000,
        debtToIncomeRatio: 0.3
      };
      
      expect(approveLoan(goodApplicant)).toEqual({
        approved: true,
        reason: 'All criteria met'
      });
    });

    it('should reject loans with low credit score', () => {
      const lowCreditApplicant = {
        creditScore: 650,
        income: 100000,
        loanAmount: 30000,
        debtToIncomeRatio: 0.3
      };
      
      expect(approveLoan(lowCreditApplicant)).toEqual({
        approved: false,
        reason: 'Credit score too low'
      });
    });

    it('should reject loans with insufficient income', () => {
      const lowIncomeApplicant = {
        creditScore: 750,
        income: 50000,
        loanAmount: 20000,
        debtToIncomeRatio: 0.3
      };
      
      expect(approveLoan(lowIncomeApplicant)).toEqual({
        approved: false,
        reason: 'Insufficient income for requested loan amount'
      });
    });

    it('should reject loans with high debt-to-income ratio', () => {
      const highDebtApplicant = {
        creditScore: 750,
        income: 100000,
        loanAmount: 30000,
        debtToIncomeRatio: 0.5
      };
      
      expect(approveLoan(highDebtApplicant)).toEqual({
        approved: false,
        reason: 'Debt-to-income ratio too high'
      });
    });
  });

  describe('canAccessResource', () => {
    it('should allow access when all conditions are met', () => {
      const user = { id: 123 };
      const permissions = { 123: ['resource1', 'resource2'] };
      
      expect(canAccessResource(user, permissions, 'resource1')).toBe(true);
    });

    it('should reject access when parameters are missing', () => {
      expect(canAccessResource(null, {}, 'resource1')).toBe(false);
      expect(canAccessResource({}, null, 'resource1')).toBe(false);
      expect(canAccessResource({}, {}, null)).toBe(false);
    });

    it('should reject access when user has no id', () => {
      const user = { name: 'John' }; // No id property
      const permissions = { 123: ['resource1'] };
      
      expect(canAccessResource(user, permissions, 'resource1')).toBe(false);
    });

    it('should reject access when user has no permissions', () => {
      const user = { id: 123 };
      const permissions = { 456: ['resource1'] }; // Different user id
      
      expect(canAccessResource(user, permissions, 'resource1')).toBe(false);
    });

    it('should reject access when resource is not in permissions', () => {
      const user = { id: 123 };
      const permissions = { 123: ['resource1'] };
      
      expect(canAccessResource(user, permissions, 'resource2')).toBe(false);
    });
  });

  describe('validateForm', () => {
    it('should validate forms with all valid fields', () => {
      const validForm = {
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password123'
      };
      
      expect(validateForm(validForm)).toEqual({
        valid: true,
        errors: {}
      });
    });

    it('should report invalid email', () => {
      const invalidEmailForm = {
        email: 'invalid-email',
        password: 'password123',
        confirmPassword: 'password123'
      };
      
      expect(validateForm(invalidEmailForm)).toEqual({
        valid: false,
        errors: {
          email: 'Valid email is required'
        }
      });
    });

    it('should report short password', () => {
      const shortPasswordForm = {
        email: 'test@example.com',
        password: 'short',
        confirmPassword: 'short'
      };
      
      expect(validateForm(shortPasswordForm)).toEqual({
        valid: false,
        errors: {
          password: 'Password must be at least 8 characters'
        }
      });
    });

    it('should report mismatched passwords', () => {
      const mismatchedPasswordsForm = {
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'differentpassword'
      };
      
      expect(validateForm(mismatchedPasswordsForm)).toEqual({
        valid: false,
        errors: {
          confirmPassword: 'Passwords do not match'
        }
      });
    });

    it('should report multiple validation errors', () => {
      const multipleErrorsForm = {
        email: 'invalid-email',
        password: 'short',
        confirmPassword: 'different'
      };
      
      const result = validateForm(multipleErrorsForm);
      expect(result.valid).toBe(false);
      expect(Object.keys(result.errors).length).toBe(3);
      expect(result.errors.email).toBeDefined();
      expect(result.errors.password).toBeDefined();
      expect(result.errors.confirmPassword).toBeDefined();
    });
  });
});

// ========================================================================
// Tests for CREATE level exercises
// ========================================================================

describe('Expert Conditionals (CREATE Level)', () => {
  describe('parseTimeString', () => {
    it('should parse valid 24-hour format strings', () => {
      expect(parseTimeString('14:30')).toEqual({
        valid: true,
        hours: 14,
        minutes: 30
      });
      expect(parseTimeString('00:00')).toEqual({
        valid: true,
        hours: 0,
        minutes: 0
      });
      expect(parseTimeString('23:59')).toEqual({
        valid: true,
        hours: 23,
        minutes: 59
      });
    });

    it('should parse valid 12-hour format strings', () => {
      expect(parseTimeString('2:30 PM')).toEqual({
        valid: true,
        hours: 14,
        minutes: 30
      });
      expect(parseTimeString('12:00 AM')).toEqual({
        valid: true,
        hours: 0,
        minutes: 0
      });
      expect(parseTimeString('11:59 PM')).toEqual({
        valid: true,
        hours: 23,
        minutes: 59
      });
    });

    it('should be case-insensitive for AM/PM', () => {
      expect(parseTimeString('2:30 pm')).toEqual({
        valid: true,
        hours: 14,
        minutes: 30
      });
      expect(parseTimeString('11:00 am')).toEqual({
        valid: true,
        hours: 11,
        minutes: 0
      });
    });

    it('should reject invalid time values', () => {
      expect(parseTimeString('25:00')).toEqual({
        valid: false,
        error: 'Invalid time values'
      });
      expect(parseTimeString('12:60')).toEqual({
        valid: false,
        error: 'Invalid time values'
      });
      expect(parseTimeString('13:00 PM')).toEqual({
        valid: false,
        error: 'Invalid time values'
      });
    });

    it('should reject invalid formats', () => {
      expect(parseTimeString('1430')).toEqual({
        valid: false,
        error: 'Unrecognized time format'
      });
      expect(parseTimeString('2:30PM')).toEqual({
        valid: false,
        error: 'Unrecognized time format'
      });
      expect(parseTimeString('not a time')).toEqual({
        valid: false,
        error: 'Unrecognized time format'
      });
    });

    it('should handle invalid inputs', () => {
      expect(parseTimeString('')).toEqual({
        valid: false,
        error: 'Invalid input'
      });
      expect(parseTimeString(null)).toEqual({
        valid: false,
        error: 'Invalid input'
      });
    });
  });

  describe('trafficLightMachine', () => {
    it('should cycle through normal states with TIMER action', () => {
      expect(trafficLightMachine('green', 'TIMER')).toBe('yellow');
      expect(trafficLightMachine('yellow', 'TIMER')).toBe('red');
      expect(trafficLightMachine('red', 'TIMER')).toBe('green');
    });

    it('should handle POWER_OUTAGE action', () => {
      expect(trafficLightMachine('green', 'POWER_OUTAGE')).toBe('flashing');
      expect(trafficLightMachine('yellow', 'POWER_OUTAGE')).toBe('flashing');
      expect(trafficLightMachine('red', 'POWER_OUTAGE')).toBe('flashing');
    });

    it('should handle RESET action', () => {
      expect(trafficLightMachine('green', 'RESET')).toBe('red');
      expect(trafficLightMachine('yellow', 'RESET')).toBe('red');
      expect(trafficLightMachine('flashing', 'RESET')).toBe('red');
    });

    it('should handle the flashing state correctly', () => {
      expect(trafficLightMachine('flashing', 'TIMER')).toBe('flashing');
      expect(trafficLightMachine('flashing', 'POWER_RESTORE')).toBe('red');
      expect(trafficLightMachine('flashing', 'POWER_OUTAGE')).toBe('flashing');
    });

    it('should handle unknown actions by keeping the current state', () => {
      expect(trafficLightMachine('green', 'UNKNOWN')).toBe('green');
      expect(trafficLightMachine('red', 'UNKNOWN')).toBe('red');
    });

    it('should default to red for invalid states', () => {
      expect(trafficLightMachine('blue', 'TIMER')).toBe('red');
      expect(trafficLightMachine('', 'TIMER')).toBe('red');
      expect(trafficLightMachine(null, 'TIMER')).toBe('red');
    });
  });

  describe('calculateCartTotal', () => {
    it('should calculate subtotal correctly', () => {
      const cart = {
        items: [
          { name: 'Product 1', price: 10, quantity: 1 },
          { name: 'Product 2', price: 20, quantity: 2 }
        ],
        isLoggedIn: false
      };
      
      const result = calculateCartTotal(cart);
      expect(result.subtotal).toBe(50); // 10*1 + 20*2 = 50
    });

    it('should apply quantity discounts for items with 3+ quantity', () => {
      const cart = {
        items: [
          { name: 'Product 1', price: 10, quantity: 3 }, // Should get 10% off
          { name: 'Product 2', price: 20, quantity: 2 }  // Should not get discount
        ],
        isLoggedIn: false
      };
      
      const result = calculateCartTotal(cart);
      expect(result.subtotal).toBe(70); // 10*3 + 20*2 = 70
      expect(result.discounts.length).toBe(1);
      expect(result.discounts[0].amount).toBe(3); // 10% of 30 = 3
      expect(result.total).toBe(67); // 70 - 3 = 67
    });

    it('should apply coupon discounts', () => {
      const cart = {
        items: [
          { name: 'Product 1', price: 10, quantity: 1 }
        ],
        couponCode: 'SAVE10',
        isLoggedIn: false
      };
      
      const result = calculateCartTotal(cart);
      expect(result.subtotal).toBe(10);
      expect(result.discounts.length).toBe(1);
      expect(result.discounts[0].amount).toBe(1); // 10% of 10 = 1
      expect(result.total).toBe(9); // 10 - 1 = 9
    });

    it('should apply premium member discount', () => {
      const cart = {
        items: [
          { name: 'Product 1', price: 10, quantity: 1 }
        ],
        isLoggedIn: true,
        user: { membershipLevel: 'premium' }
      };
      
      const result = calculateCartTotal(cart);
      expect(result.subtotal).toBe(10);
      expect(result.discounts.length).toBe(1);
      expect(result.discounts[0].amount).toBe(0.5); // 5% of 10 = 0.5
      expect(result.total).toBe(9.5); // 10 - 0.5 = 9.5
    });

    it('should apply order minimum discount for orders over $100', () => {
      const cart = {
        items: [
          { name: 'Product 1', price: 60, quantity: 2 } // 120 total
        ],
        isLoggedIn: false
      };
      
      const result = calculateCartTotal(cart);
      expect(result.subtotal).toBe(120);
      expect(result.discounts.length).toBe(1);
      expect(result.discounts[0].amount).toBe(5); // $5 off for orders over $100
      expect(result.total).toBe(115); // 120 - 5 = 115
    });

    it('should apply multiple applicable discounts', () => {
      const cart = {
        items: [
          { name: 'Product 1', price: 20, quantity: 5 } // 100 total, qualifies for quantity discount
        ],
        couponCode: 'SAVE20',
        isLoggedIn: true,
        user: { membershipLevel: 'premium' }
      };
      
      const result = calculateCartTotal(cart);
      expect(result.subtotal).toBe(100);
      expect(result.discounts.length).toBe(4); // quantity, coupon, member, order minimum
      expect(result.total).toBe(65); // 100 - 10 - 20 - 5 - 0 = 65
    });
  });

  describe('isActionPermitted', () => {
    it('should allow admin to perform any action', () => {
      const adminUser = { roles: ['admin'], id: 1 };
      const resource = { ownerId: 2, visibility: 'private' };
      
      expect(isActionPermitted(adminUser, 'create', resource)).toBe(true);
      expect(isActionPermitted(adminUser, 'read', resource)).toBe(true);
      expect(isActionPermitted(adminUser, 'update', resource)).toBe(true);
      expect(isActionPermitted(adminUser, 'delete', resource)).toBe(true);
    });

    it('should restrict editor permissions appropriately', () => {
      const editorUser = { roles: ['editor'], id: 1 };
      const resource = { ownerId: 2, visibility: 'private' };
      
      expect(isActionPermitted(editorUser, 'create', resource)).toBe(true);
      expect(isActionPermitted(editorUser, 'read', resource)).toBe(true);
      expect(isActionPermitted(editorUser, 'update', resource)).toBe(true);
      expect(isActionPermitted(editorUser, 'delete', resource)).toBe(false);
    });

    it('should restrict author permissions based on ownership', () => {
      const authorUser = { roles: ['author'], id: 1 };
      const ownedResource = { ownerId: 1, visibility: 'private' };
      const otherResource = { ownerId: 2, visibility: 'private' };
      
      // Can create any resource
      expect(isActionPermitted(authorUser, 'create', otherResource)).toBe(true);
      
      // Can only read/update/delete own resources
      expect(isActionPermitted(authorUser, 'read', ownedResource)).toBe(true);
      expect(isActionPermitted(authorUser, 'update', ownedResource)).toBe(true);
      expect(isActionPermitted(authorUser, 'delete', ownedResource)).toBe(true);
      
      expect(isActionPermitted(authorUser, 'read', otherResource)).toBe(false);
      expect(isActionPermitted(authorUser, 'update', otherResource)).toBe(false);
      expect(isActionPermitted(authorUser, 'delete', otherResource)).toBe(false);
    });

    it('should restrict guest permissions to reading public resources', () => {
      const guestUser = { roles: ['guest'], id: 1 };
      const publicResource = { ownerId: 2, visibility: 'public' };
      const privateResource = { ownerId: 2, visibility: 'private' };
      
      expect(isActionPermitted(guestUser, 'read', publicResource)).toBe(true);
      expect(isActionPermitted(guestUser, 'create', publicResource)).toBe(false);
      expect(isActionPermitted(guestUser, 'update', publicResource)).toBe(false);
      expect(isActionPermitted(guestUser, 'delete', publicResource)).toBe(false);
      
      expect(isActionPermitted(guestUser, 'read', privateResource)).toBe(false);
    });
  });

  describe('recommendTreatment', () => {
    it('should recommend COVID test for fever with cough and fatigue', () => {
      const patient = {
        age: 35,
        temperature: 38.5,
        symptoms: ['cough', 'fatigue'],
        chronicConditions: []
      };
      
      expect(recommendTreatment(patient)).toBe('COVID test recommended');
    });

    it('should recommend strep test for fever with sore throat', () => {
      const patient = {
        age: 35,
        temperature: 38,
        symptoms: ['sore throat'],
        chronicConditions: []
      };
      
      expect(recommendTreatment(patient)).toBe('Strep test recommended');
    });

    it('should recommend antipyretics for other fever cases', () => {
      const patient = {
        age: 35,
        temperature: 38.5,
        symptoms: ['dizziness'],
        chronicConditions: []
      };
      
      expect(recommendTreatment(patient)).toBe('Antipyretics recommended');
    });

    it('should recommend acetaminophen for patients with hypertension and pain', () => {
      const patient = {
        age: 45,
        temperature: 37,
        symptoms: ['headache'],
        chronicConditions: ['hypertension']
      };
      
      expect(recommendTreatment(patient)).toBe('Acetaminophen recommended');
    });

    it('should recommend NSAIDs for pain without hypertension', () => {
      const patient = {
        age: 30,
        temperature: 37,
        symptoms: ['pain'],
        chronicConditions: []
      };
      
      expect(recommendTreatment(patient)).toBe('NSAIDs recommended');
    });

    it('should recommend pediatric dermatology for children with rash', () => {
      const patient = {
        age: 10,
        temperature: 37,
        symptoms: ['rash'],
        chronicConditions: []
      };
      
      expect(recommendTreatment(patient)).toBe('Pediatric dermatology referral');
    });

    it('should recommend comprehensive evaluation for seniors with multiple symptoms', () => {
      const patient = {
        age: 70,
        temperature: 37.5,
        symptoms: ['fatigue', 'dizziness', 'nausea'],
        chronicConditions: ['diabetes']
      };
      
      expect(recommendTreatment(patient)).toBe('Comprehensive evaluation recommended');
    });

    it('should recommend symptomatic treatment as default', () => {
      const patient = {
        age: 40,
        temperature: 37,
        symptoms: ['congestion'],
        chronicConditions: []
      };
      
      expect(recommendTreatment(patient)).toBe('Symptomatic treatment and follow-up as needed');
    });
  });
});