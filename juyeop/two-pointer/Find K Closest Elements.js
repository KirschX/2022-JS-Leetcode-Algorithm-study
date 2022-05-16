const findClosestElements = function (arr, k, x) {
    arr = arr.map((elem) => {
      const distance = Math.abs(elem - x);
      return {
        value: elem,
        distance
      };
    });
  
    const sortComparater = (obj1, obj2) => {
      if (obj1.distance > obj2.distance) return 1;
      else if (obj1.distance < obj2.distance) return -1;
      else return obj1.value - obj2.value;
    };
  
    arr.sort(sortComparater);
  
    return arr.slice(0, k)
              .map(elem => elem.value)
              .sort((a, b) => a - b);
  };