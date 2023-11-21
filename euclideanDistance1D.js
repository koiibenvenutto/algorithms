const mergeSort = require("./mergeSort");

const arr = [30, 6, 8, 122, 3, 7, 3, 10, 23, 24];

function shortestDistance1D(points) {
  sortedPoints = mergeSort(points);
  //   [indxPoint1, indxPoint2, distance]
  let shortestDistance = [0, 0, Infinity];
  const shortestDistances = [];

  for (let i = 0; i < sortedPoints.length - 1; i++) {
    let distance = Math.abs(sortedPoints[i] - sortedPoints[i + 1]);

    if (distance > 0 && distance < shortestDistance[2]) {
      shortestDistance = [i, i + 1, distance];
    }
  }

  shortestDistances.push(shortestDistance);

  for (let i = shortestDistance[1]; i < sortedPoints.length - 1; i++) {
    let distance = Math.abs(sortedPoints[i] - sortedPoints[i + 1]);

    if (distance > 0 && distance === shortestDistance[2]) {
      shortestDistances.push([i, i + 1, distance]);
    }
  }

  console.log(sortedPoints);
  return shortestDistances;
}

module.exports = shortestDistance1D;
