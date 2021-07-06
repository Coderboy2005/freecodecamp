function findSmallestNum(arr) {
    var lowest;
    lowest = arr[0];
    for (var i in arr){
      if (arr[i]<lowest){
        lowest = arr[i];
      }
    }
    return lowest;
  }