// 설명할 문제
const maxSubArray = function (nums) {
    const findMaximumCrossSubarray = (arr, left, mid, right) => {
      let leftSum = 0;
      let rightSum = 0;
      let sum = 0;
  
      for (let i = mid - 1; i >= left; i--) {
        sum += arr[i];
        if (sum > leftSum) leftSum = sum;
      }
  
      sum = 0;
  
      for (let j = mid + 1; j <= right; j++) {
        sum += arr[j];
        if (sum > rightSum) rightSum = sum;
      }
  
      return leftSum + arr[mid] + rightSum;
    };
  
    const findMaximumSubarray = (arr, left, right) => {
      if (right <= left) return arr[left];
      let mid = Math.floor((left + right) / 2);
      let leftSum = findMaximumSubarray(arr, left, mid - 1);
      let rightSum = findMaximumSubarray(arr, mid + 1, right);
      let crossSum = findMaximumCrossSubarray(arr, left, mid, right);
  
      if (leftSum >= rightSum && leftSum >= crossSum) return leftSum;
      else if (rightSum >= leftSum && rightSum >= crossSum) return rightSum;
      else return crossSum;
    };
  
    let answer = findMaximumSubarray(nums, 0, nums.length - 1);
    return answer;
  };