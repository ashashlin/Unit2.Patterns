/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") {
    return NaN;
  }

  if (n < 0) {
    return undefined;
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== "number") {
    return null;
  }

  if (n < 1) {
    return [];
  }

  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(i);
  }

  return result;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  if (strings.length === 0) {
    return "";
  }

  let longestStr = strings[0];

  for (const str of strings) {
    if (str.length > longestStr.length) {
      longestStr = str;
    }
  }

  return longestStr;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  let studentPresent = 0;

  for (const value of attendance) {
    if (value) {
      studentPresent++;
    }
  }

  return studentPresent;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== "string") {
    return null;
  }

  let result = "";

  for (const char of dna) {
    switch (char) {
      case "A": {
        result += "T";
        break;
      }

      case "T": {
        result += "A";
        break;
      }

      case "C": {
        result += "G";
        break;
      }

      case "G": {
        result += "C";
        break;
      }
    }
  }

  return result;
}
