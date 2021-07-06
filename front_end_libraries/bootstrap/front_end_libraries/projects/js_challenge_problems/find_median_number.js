const findMedian = arr => {
    arr.sort((a, b) => a - b);
      return (arr[(arr.length - 1) >> 1] + arr[arr.length >> 1]) / 2
  }