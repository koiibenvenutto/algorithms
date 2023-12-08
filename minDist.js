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

function dist(a, b) {
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
}

function shortestAcross(points, median, d) {
  points = points.filter((point) => Math.abs(point[0] - median) < d);

  points.sort((a, b) => {
    return a[1] - b[1];
  });

  if (points.length < 2) {
    return Infinity;
  }

  console.log(points);

  let distance = Infinity;
  for (let i = 0; i < points.length; i++) {
    for (
      let j = i + 1;
      j < points.length - 1 && Math.abs(points[i][1] - points[j][1]) < d;
      j++
    ) {
      let result = dist(points[i], points[j]);
      if (result < distance) {
        distance = result;
      }
    }
  }
  console.log(distance);
  return distance;
}

function minDist(points) {
  function shortestRecursive(array) {
    if (points.length < 2) {
      return Infinity;
    } else if (points.length <= 3) {
      let distance = Infinity;
      for (let i = 0; i < array.length - 1; i++) {
        for (let j = 1; j < array.length; j++) {
          if (i === j && j < array.length - 1) {
            j++;
          }
          let result = dist(array[i], array[j]);

          if (result < distance) {
            distance = result;
          }
        }
      }

      if (distance < d) {
        d = distance;
      }
      console.log(`Distance: ${distance}`);
      return distance;
    }

    points.sort((a, b) => {
      return a[0] - b[0];
    });

    console.log(points);

    const middle = Math.floor(points.length / 2);
    const left = points.slice(0, middle);
    const right = points.slice(middle);

    console.log(`Left: ${left}`);
    console.log(`Right: ${right}`);

    const median = points[middle - 1][0];
    console.log(`Median: ${median}`);

    const lMin = shortestRecursive(left);
    const rMin = shortestRecursive(right);

    if (Math.min(lMin, rMin) < d) {
      d = Math.min(lMin, rMin);
    }

    console.log(`d: ${d}`);

    return Math.min(lMin, shortestAcross(points, median, d), rMin);
  }

  let d = Infinity;
  return shortestRecursive(points);
}

console.log(minDist(points));
