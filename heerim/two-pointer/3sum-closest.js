/**
 * 투포인터도 아니고 쓰리포인터
 * 상당히 비효율적인데 효율적으로 짜는 방법이 있기는 한것인가?
 * "연속된 부분합"은 투포인터 기술로 빠르게 풀수있는데 말야..
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function abs(a, b) {
  if (a > b) return a - b;
  else return b - a;
}

var threeSumClosest = function (nums, target) {
  let length = nums.length;

  let closest = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        if (abs(nums[i] + nums[j] + nums[k], target) < abs(closest, target)) {
          closest = nums[i] + nums[j] + nums[k];
        }
      }
    }
  }
  return closest;
};
