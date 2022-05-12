const removeDuplicates = function (nums) {
    let lp = 0;
    let rp = 0;
    let size = nums.length;
    let min = nums[lp];
  
    const swap = (idx1, idx2) => {
      const temp = nums[idx1];
      nums[idx1] = nums[idx2];
      nums[idx2] = temp;
    };
  
    while (lp < size && rp < size) {
      if (min >= nums[rp]) {
        rp++;
      } else if (nums[rp] > min) {
        min = nums[rp];
        swap(rp, lp + 1);
        lp++;
      }
    }
  
    return lp + 1;
  };