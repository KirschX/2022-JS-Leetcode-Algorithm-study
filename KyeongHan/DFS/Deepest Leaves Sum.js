// leetcode : 1302. Deepest Leaves Sum
/*
  문제 설명 : 
  Binary tree의 Root node가 주어지면 deepest leave들의 값의 합을 구하라.
*/

var deepestLeavesSum = function(root) {
  // deepest depth 찾기
  const findDepth = (node)=>{
      // 현재 노드가 null일 시에 0 return
      if(node === null) return 0;
      // 현재 노드가 null이 아닐 시에 recursive 진행
      return Math.max(findDepth(node.left), findDepth(node.right)) + 1;
  }
  
  const sumOfdeepests = (node, depth) => {
      // deepest가 아닌데 node가 null일 경우
      if(node === null){
          return 0;
      }
      // deepest node일 경우
      if(depth === 1){
          return node.val;
      }
      return sumOfdeepests(node.left,depth - 1) + sumOfdeepests(node.right, depth - 1);
  }
  const depth = findDepth(root);
  
  return sumOfdeepests(root, depth);
};