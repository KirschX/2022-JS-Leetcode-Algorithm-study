/**
 * @param {number[]} position
 * @return {number}
 */

// 3번 예제에서 힌트 -> 굳이 시뮬레이션이 아니라 수학계산으로도 풀수있겠다.
var minCostToMoveChips = function (position) {
  let min = Number.MAX_VALUE;
  const n = position.length;

  for (let to = 0; to < n; to++) {
    let cost = 0;
    for (let from = 0; from < n; from++) {
      if (Math.abs(position[from] - position[to]) % 2 === 1) cost += 1;
    }
    if (cost < min) min = cost;
  }
  return min;
};
