/**
 * leetcode problem link: https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  /**
   * @param {string} s
   * @return {boolean}
   */
  var isValid = function (s) {
    const stack = [];

    for (const char of s) {
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);

        continue;
      }

      if (char === ")") {
        if (stack.pop() !== "(") return false;
      }

      if (char === "}") {
        if (stack.pop() !== "{") return false;
      }

      if (char === "]") {
        if (stack.pop() !== "[") return false;
      }
    }

    return stack.length === 0;
  };
};
