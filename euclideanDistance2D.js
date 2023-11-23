// Step 1: sort the point by their x axis

const points = [
  [-4, 6],
  [2, -8],
  [1, 0],
  [9, 8],
];

points.sort((a, b) => {
  return points[a] - points[b];
});

function compare(left, right) {
  if (left < right) {
    return left;
  } else {
    return right;
  }
}

function findShortestDistance(array) {
  // return the shortest distance in the passed array in the form of a number, for example: 2.56
}

function divideUntilSmallThenShortest(points) {
  if (points.length <= 3) {
    return findShortestDistance(points);
  }
  const middle = Math.floor(points.length / 2);
  const left = points.splice(0, middle);
  const right = points;

  return compare(
    divideUntilSmallThenShortest(left),
    divideUntilSmallThenShortest(right)
  );
}

divide(points);
