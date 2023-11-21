const mergeSort = require("./mergeSort");

const arr = [30, 6, 8, 122, 3, 7, 3, 10, 23, 24];

const sortedArr = mergeSort(arr);

function shortestDistance1D(points) {
  //   [indxPoint1, indxPoint2, distance]
  let shortestDistance = [0, 0, Infinity];
  const shortestDistances = [];

  for (let i = 0; i < points.length - 1; i++) {
    let distance = Math.abs(points[i] - points[i + 1]);

    if (distance > 0 && distance < shortestDistance[2]) {
      shortestDistance = [i, i + 1, distance];
    }
  }

  shortestDistances.push(shortestDistance);

  for (let i = shortestDistance[1]; i < points.length - 1; i++) {
    let distance = Math.abs(points[i] - points[i + 1]);

    if (distance > 0 && distance === shortestDistance[2]) {
      shortestDistances.push([i, i + 1, distance]);
    }
  }

  console.log(points);
  return shortestDistances;
}

console.log(shortestDistance1D(sortedArr));
