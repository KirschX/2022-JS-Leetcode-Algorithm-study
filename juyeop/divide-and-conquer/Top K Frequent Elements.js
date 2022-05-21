const topKFrequent = function (nums, k) {
    const obj = {};
    const answer = [];
  
    nums.forEach((key) => {
      if (obj[key]) {
        obj[key]++;
      } else {
        obj[key] = 1;
      }
    });
  
    for (let key in obj) {
      answer.push({
        number: Number(key),
        freq: obj[key]
      });
    }
  
    answer.sort((a, b) => b.freq - a.freq);
    return answer.slice(0, k).map((obj) => obj.number);
  };