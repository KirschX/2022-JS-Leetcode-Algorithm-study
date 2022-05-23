var topKFrequent = function(nums, k) {
  // Map으로 값과 이의 rank point를 준다.
  const valuePointMap=new Map();
  
  // nums 돌면서 각 값에 대한 point 정립
  for(const num of nums){
      if(!valuePointMap.has(num)){
          valuePointMap.set(num,1)
      }else{
          valuePointMap.set(num,valuePointMap.get(num)+1);
      }
  }
  const sortedArr=[];
  for(const [key,value] of valuePointMap){
      sortedArr.push([key,value]);
  }
  
  // point 순으로 정렬 (내림차순)
  sortedArr.sort((a,b)=>b[1]-a[1]);
  const answer=[];
  for(let i=0;i<k;i++){
      answer.push(sortedArr[i][0]);
  }
  
  return answer;
  
};