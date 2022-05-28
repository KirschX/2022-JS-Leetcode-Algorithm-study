/**
 * @param {number[]} nums
 * @return {boolean}
 */
// - 생각 해보기-
// 1. dfs와 bfs중에 뭐가 더 좋을까?
// 2. greedy 적으로는 어떻게 풀수있을까?
//  1. selection with feasibility
//  2. solution check (크루스칼의 경우 모든 노드를 이음, 거스름돈문제)
// 3. 그리디의 대표적인 알고리즘은 다익스트라와 크루스칼, 프림 등이 있다.
// 4. locally optimal이라는 개념을 더더욱 적용시켜보자
// 5. 그럴려면, 시작점에서 시작하기보다, 정답에서 시작하는게 더 좋아보였음.

var canJump = function (nums) {
  const START = 0;
  const END = nums.length - 1;
  const visit = new Array(nums.length).fill(0);

  function dfs(i) {
    if (i == END) return true; // 원하는 결과를 찾음!
    if (nums[i] === 0) return false; // 움직일 수 있는 칸이 아예 없음

    let returnValue = false;
    for (let n = i + nums[i]; n >= i - nums[i]; n--) {
      if (n < START || n > END || n == i || visit[n] === 1) continue;
      visit[n] = 1;
      returnValue = returnValue === true ? true : dfs(n);
    }

    return returnValue;
  }

  return dfs(START);
};
