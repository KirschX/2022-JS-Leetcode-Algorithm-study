const maximumUnits = function (boxTypes, truckSize) {
    let answer = 0;
    boxTypes.sort((a, b) => b[1] - a[1]);
    // unit의 수가 가장 많은 박스타입 순으로 정렬
    boxTypes.forEach((boxType) => {
      const [boxNum, units] = boxType;
      if (truckSize >= boxNum) {
        truckSize -= boxNum;
        answer += units * boxNum;
      } else if (truckSize >= 1 && truckSize < boxNum) {
        answer += truckSize * units;
        truckSize = 0;
      }
    });
  
    return answer;
  };