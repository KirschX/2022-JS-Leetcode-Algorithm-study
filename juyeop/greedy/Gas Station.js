const canCompleteCircuit = function (gas, cost) {
    let answer = -1;
    let curGas = gas.map((amount, i) => amount - cost[i]);
    let total = curGas.reduce((acc, cur) => acc + cur, 0);
  
    if (total < 0) return answer;
    else {
      // 도중에 한 번이라도 0보다 작아지면 안됨
      // 시작이 0보다 작으면 안 됨
      for (let i = 0; i < curGas.length; i++) {
        if (curGas[i] < 0) continue;
        else {
          let sum = 0;
          let canGoing = true;
          for (let j = i; j < curGas.length; j++) {
            sum += curGas[j];
            if (sum < 0) {
              canGoing = false;
              break;
            }
          }
          if (canGoing) {
            canGoing = true;
            for (let j = 0; j < i; j++) {
              sum += curGas[j];
              if (sum < 0) {
                canGoing = false;
                break;
              }
            }
            if (canGoing) return i;
          }
        }
      }
    }
  };