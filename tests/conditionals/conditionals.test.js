import {
  isPositive,
  getTemperatureMessage,
  getLetterGrade,
  getDayInfo,
  isLeapYear,
  getVotingMessage,
  validateUserInput,
  getDisplayName,
  calculateShippingCost,
  safeDivide,
  parseTimeString,
  trafficLightMachine
} from '../../src/conditionals/conditionals.js';

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
});