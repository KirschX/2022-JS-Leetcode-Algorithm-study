/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let dict = new Map();
  let n = nums.length;
  console.log(n/2);
  for(let i=0; i<nums.length; i++) {
      let temp = dict.get(nums[i]);
      dict.set(nums[i], temp+1 || 1)
      
      if(dict.get(nums[i]) > n/2)
          return nums[i];
  }
};