const points = [
  [-200, -8],
  [100, 0],
  [4, 90],
  [53, 4],
  [20, 24],
  [57, 2],
  [30, 2],
  [1, 3],
  [76, 7],
];

let start = performance.now();

points.sort((a, b) => {
  return a[0] - b[0];
});

function eucDist(a, b) {
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
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
      let result = eucDist(array[i], array[j]);

      if (result < distance) {
        distance = result;
      }
    }
  }

  return distance;
}

let d = split(points);

function shortestAcrossColumns(points) {
  points.sort((a, b) => a[1] - b[1]);
  let minDistance = d;
  for (let i = 0; i < points.length; i++) {
    for (
      let j = i + 1;
      j < points.length && points[j][1] - points[i][1] < d;
      j++
    ) {
      let distance = eucDist(points[i], points[j]);
      if (distance < minDistance) {
        minDistance = distance;
      }
    }
  }
  d = minDistance;
  return minDistance;
}

//
//
//
function findShortestDistance(points) {
  if (points.length <= 1) {
    return;
  }

  function split(points) {
    if (points.length <= 3) {
      columns.push(points);
      return findShortestDistance(points);
    }
    const middle = Math.floor(points.length / 2);
    const left = points.slice(0, middle);
    const right = points.slice(middle);

    let shortestAcross = shortestAcrossColumns(points);

    return Math.min(split(left), shortestAcross, split(right));
  }

  const columns = [];
  for (col = 0; col < columns.length - 1; col++) {
    let rightMostOfLeft = columns[col][columns[col].length - 1];

    let divide = points.indexOf(rightMostOfLeft) + 1;

    let searchBoundaries = [rightMostOfLeft[0] - d, rightMostOfLeft[0] + d];
    console.log(searchBoundaries);

    const candidates = [];
    for (let i = 0; i < points.length; i++) {
      if (
        points[i][0] >= searchBoundaries[0] &&
        points[i][0] <= searchBoundaries[1]
      ) {
        candidates.push(points[i]);
      }
    }

    console.log(candidates);

    const elects = [];

    function shortestAcrossColumns(candidates) {
      candidates.sort((a, b) => a[1] - b[1]);
      let minDistance = d;
      for (let i = 0; i < candidates.length; i++) {
        for (
          let j = i + 1;
          j < candidates.length && candidates[j][1] - candidates[i][1] < d;
          j++
        ) {
          let distance = eucDist(candidates[i], candidates[j]);
          if (distance < minDistance) {
            minDistance = distance;
          }
        }
      }
      d = minDistance;
      return minDistance;
    }

    shortestAcrossColumns(candidates);

    console.log(d);
  }
}

let end = performance.now();
console.log(`Execution time: ${end - start} milliseconds`);

// Chat GPT's version:
//
//
//
//

// PERFORMANCE TESTING START
let startGPT = performance.now();

function calculateDistance(point1, point2) {
  return Math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2);
}

function findClosestInPartition(points) {
  let minDistance = Infinity;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let distance = calculateDistance(points[i], points[j]);
      if (distance < minDistance) {
        minDistance = distance;
      }
    }
  }
  return minDistance;
}

function findClosestAcrossPartitions(points, median, d) {
  let strip = points.filter((point) => Math.abs(point[0] - median) < d);
  strip.sort((a, b) => a[1] - b[1]);

  let minDistance = d;
  for (let i = 0; i < strip.length; i++) {
    for (
      let j = i + 1;
      j < strip.length && strip[j][1] - strip[i][1] < d;
      j++
    ) {
      let distance = calculateDistance(strip[i], strip[j]);
      if (distance < minDistance) {
        minDistance = distance;
      }
    }
  }
  return minDistance;
}

function closestPairOfPoints(points) {
  if (points.length < 2) {
    return Infinity;
  }

  points.sort((a, b) => a[0] - b[0]);

  function findClosestRecursive(pointsSubset) {
    console.log(pointsSubset);

    if (pointsSubset.length <= 3) {
      return findClosestInPartition(pointsSubset);
    }

    let mid = Math.floor(pointsSubset.length / 2);
    let left = pointsSubset.slice(0, mid);
    let right = pointsSubset.slice(mid);

    let dLeft = findClosestRecursive(left);
    let dRight = findClosestRecursive(right);

    let d = Math.min(dLeft, dRight);
    let median = pointsSubset[mid][0];

    return Math.min(d, findClosestAcrossPartitions(pointsSubset, median, d));
  }

  return findClosestRecursive(points);
}

console.log("Shortest distance: ", closestPairOfPoints(points));

// PERFORMANCE TESTING END
let endGPT = performance.now();
console.log(`Execution time: ${endGPT - startGPT} milliseconds`);
