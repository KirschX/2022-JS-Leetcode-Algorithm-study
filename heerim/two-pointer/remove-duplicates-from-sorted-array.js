/**
 * 투포인터 문제: easy
 * 핵심: 추가적인 공간사용 없이 구현함
 * shifting 때문에 시간복잡도는 O(n^2)
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    // count duplicates
    let cnt = 0;
    for (let j = i + 1; j < length; j++) {
      if (nums[i] != nums[j]) break;
      cnt++;
    }
    // shifting
    length -= cnt;
    for (let j = i + 1; j < length; j++) {
      nums[j] = nums[j + cnt];
    }
  }
  return length;
};
