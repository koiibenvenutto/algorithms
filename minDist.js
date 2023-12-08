const points = [
  [1, 2],
  [192, 1],
  [0, 30],
  [67, 200],
  [300, -100],
];

function minDist(points) {
  points.sort((a, b) => a[0] - b[0]);

  function minDistRecursive(points) {
    if (points.length <= 1) {
      return Infinity;
    } else if (points.length <= 3) {
      return min3orLess(points);
    }

    const middle = Math.floor(points.length / 2);
    const left = points.slice(0, middle);
    const right = points.slice(middle);

    const partition = points[middle - 1][0];

    const lMin = minDistRecursive(left);
    const rMin = minDistRecursive(right);

    if (Math.min(lMin, rMin) < d) {
      d = Math.min(lMin, rMin);
    }

    return Math.min(lMin, rMin, minAcrossPartition(points, partition, d));
  }

  let d = Infinity;

  return minDistRecursive(points);
}

function min3orLess(points) {
  let distance = Infinity;
  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      distance = Math.min(distance, euclideanDistance(points[i], points[j]));
    }
  }
  return distance;
}

function euclideanDistance(a, b) {
  return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}

function minAcrossPartition(points, partition, d) {
  points = points.filter((point) => Math.abs(point[0] - partition) < d);

  points.sort((a, b) => a[1] - b[1]);

  let minDistance = d;
  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < Math.min(i + 7, points.length); j++) {
      minDistance = Math.min(
        minDistance,
        euclideanDistance(points[i], points[j])
      );
    }
  }

  return minDistance;
}

const t0 = performance.now();
console.log(minDist(points));
const t1 = performance.now();
console.log(t1 - t0);

//
//
//
//
//
// CHAT GPT'S VERSION:

function minDistGPT(points) {
  const sortByX = points.slice().sort((a, b) => a[0] - b[0]);
  const sortByY = points.slice();

  return minDistRecursive(sortByX, sortByY, 0, points.length);
}

function minDistRecursive(sortByX, sortByY, left, right) {
  if (right - left <= 3) {
    return bruteForceMinDist(sortByX, left, right);
  }

  const middle = Math.floor((left + right) / 2);
  const midPoint = sortByX[middle];

  const leftMin = minDistRecursive(sortByX, sortByY, left, middle);
  const rightMin = minDistRecursive(sortByX, sortByY, middle, right);

  let d = Math.min(leftMin, rightMin);

  const strip = [];
  for (let i = left; i < right; i++) {
    if (Math.abs(sortByY[i][0] - midPoint[0]) < d) {
      strip.push(sortByY[i]);
    }
  }

  return Math.min(d, stripClosest(strip, d));
}

function bruteForceMinDist(points, left, right) {
  let minDist = Infinity;
  for (let i = left; i < right; i++) {
    for (let j = i + 1; j < right; j++) {
      minDist = Math.min(minDist, euclideanDistance(points[i], points[j]));
    }
  }
  return minDist;
}

function stripClosest(strip, d) {
  let minDist = d;
  strip.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < strip.length; i++) {
    for (
      let j = i + 1;
      j < strip.length && strip[j][1] - strip[i][1] < minDist;
      j++
    ) {
      minDist = Math.min(minDist, euclideanDistance(strip[i], strip[j]));
    }
  }

  return minDist;
}

function euclideanDistance(a, b) {
  return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}

const t2 = performance.now();
console.log(minDistGPT(points));
const t3 = performance.now();
console.log(t3 - t2);
