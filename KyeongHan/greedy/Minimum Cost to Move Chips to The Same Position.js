// leetcode : 1217. Minimum Cost to Move Chips to The Same Position

/* 
    문제 설명
    1. 모든 chip들을 한 position으로 이동 시킬 때 minimum cost 를 return 하라
    2. chip 2칸 이동 cost 0, chip 1칸 이동 cost 1
    
    idea : 짝수 -> 짝수 (홀수 -> 홀수) 는 cost 0,  짝수, 홀수 positoin 중 어디에 더 많은 chip이 쌓여 있는지 체크하고 반대편의 코인 갯수를 return 한다.
    
*/
var minCostToMoveChips = function(position) {
  let odd = 0;
  let even = 0;
  
  for(let i=0; i< position.length; i++){
      if(position[i]%2 === 0){
          even += 1;
      }
      odd += 1;
  }
  
  if(even>odd){
      return odd
  }
  return even
  
};