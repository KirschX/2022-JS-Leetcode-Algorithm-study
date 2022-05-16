/**
 * 투포인터도 아니고 쓰리포인터
 * 상당히 비효율적인데 효율적으로 짜는 방법이 있기는 한것인가?
 * "연속된 부분합"은 투포인터 기술로 빠르게 풀수있는데 말야..
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function abs(a) {
  if (a > 0) return a;
  else return -a;
}

var threeSumClosest = function (nums, target) {
  nums.sort();
  let length = nums.length;
  let closest = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < length - 2; i++) {
    let j = i + 1; // left
    let k = length - 1; // right
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) return sum;
      if (abs(target - sum) < abs(target - closest)) closest = sum;
      if (sum < target) j++;
      else k--;
    }
  }
  return closest;
};
