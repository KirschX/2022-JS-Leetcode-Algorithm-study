/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var findMaxForm = function(strs, m, n) {
  const get01 = (str) => {
      let one =0;
      let zero = 0;
      for(let i=0; i<str.length; i++)
          if(str[i] == '0')
              zero++;
          else
              one++;
      return [zero, one];
  }
  
  let dp = new Array(m+1).fill(null).map(()=>(new Array(n+1).fill(0)));
  
  for(let i=0; i<strs.length; i++) {
      let [z, o] = get01(strs[i]);
      if(z > m || o > n)
          continue;
      
      for(let i=m; i>=z; i--)
          for(let j=n; j>=o; j--)
              dp[i][j] = Math.max(dp[i][j], dp[i-z][j-o] + 1);
  }
  
  return dp[m][n];
};