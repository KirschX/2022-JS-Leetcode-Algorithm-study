/**
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let ans = 0;
  let left = 0;
  let right = 0;

  // for of, for with bracket[], for with charAt(), forEach
  // 가장 빠른 친구는 for가 가장 빠르다고 한다!
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "L") left++;
    else right++;

    // 그리디의 느낌을 살려서 바로 끊어버린다!
    if (left === right) {
      left = 0;
      right = 0;
      ans += 1;
    }
  }
  return ans;
};
