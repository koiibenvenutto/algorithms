// Step 1: sort the point by their x axis

const points = [
  [-2, -8],
  [100, 0],
  [4, 90],
  [53, 4],
  [20, 24],
  [57, 2],
  [1, 2],
  [1, 3],
];

points.sort((a, b) => {
  return a[0] - b[0];
});

console.log(points);

function compare(left, right) {
  if (left < right) {
    return left;
  } else {
    return right;
  }
}

function findShortestDistance(array) {
  if (array.length < 2) {
    return Infinity;
  }

  let distance = Infinity;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1; j < array.length; j++) {
      if (i === j && j < array.length - 1) {
        j++;
      }
      let result = Math.sqrt(
        (array[i][0] - array[j][0]) ** 2 + (array[i][1] - array[j][1]) ** 2
      );

      if (result < distance) {
        distance = result;
      }
    }
  }

  return distance;
}

function shortest(points) {
  if (points.length <= 3) {
    return findShortestDistance(points);
  }
  const middle = Math.floor(points.length / 2);
  const left = points.slice(0, middle);
  const right = points.slice(middle);

  return compare(shortest(left), shortest(right));
}

console.log(shortest(points));

// Okay so since I can't think of a reason why I would need to make slabs instead of just using the columns that I have used already, I'm going to try my method.
