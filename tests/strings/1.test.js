import { reverseString } from '../../src/strings/1.js';

describe('String Manipulation', () => {
  describe('reverseString', () => {
    it('should reverse a string', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('world')).toBe('dlrow');
    });

    it('should handle empty strings', () => {
      expect(reverseString('')).toBe('');
    });

    // Using jest-extended matchers
    it('should return string with same length', () => {
      const input = 'testing';
      const result = reverseString(input);
      expect(result).toHaveLength(input.length);
    });

    // Using jest-sorted matcher
    it('should return characters in reverse order', () => {
      const input = ['a', 'b', 'c', 'd'];
      const result = reverseString(input.join('')).split('');
      expect(result).toEqual(['d', 'c', 'b', 'a']);
      expect(result).toBeSorted({ descending: true });
    });
  });
});
