const canJump = function (nums) {
    let curIdx = 0;
    let answer = false;
  
    while (curIdx < nums.length) {
      let canJump = nums[curIdx];
      if (curIdx >= nums.length - 1 || curIdx + canJump >= nums.length - 1) {
        answer = true;
        break;
      }
      if (!canJump) break;
      let nextIdx = curIdx + canJump;
      let maxDistance = nextIdx;
      for (let i = curIdx + 1; i <= curIdx + canJump; i++) {
        if (nums[i] + i > maxDistance) {
          maxDistance = nums[i] + i;
          nextIdx = i;
        }
      }
      curIdx = nextIdx;
    }
  
    return answer;
  };