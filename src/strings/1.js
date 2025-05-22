// This file is intended for string manipulation functions.

/**
 * Reverses a string
 * @param {string} str - The input string to reverse
 * @returns {string} The reversed string
 */
export function reverseString(str) {
  return str.split('').reverse().join('');
}
