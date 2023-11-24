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

points.sort((a, b) => {
  return a[0] - b[0];
});

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

function eucDist(a, b) {
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
}

function split(points) {
  if (points.length <= 3) {
    columns.push(points);
    return findShortestDistance(points);
  }
  const middle = Math.floor(points.length / 2);
  const left = points.slice(0, middle);
  const right = points.slice(middle);

  return compare(split(left), split(right));
}

const columns = [];

let d = split(points);

//
//
//

for (col = 0; col < columns.length - 1; col++) {
  let rightMostOfLeft = columns[col][columns[col].length - 1];
  let rightMostOfLeftX = rightMostOfLeft[0];

  let divide = points.indexOf(rightMostOfLeft) + 1;

  let left = points.slice(0, divide);
  let right = points.slice(divide);

  let searchBoundaries = [rightMostOfLeftX - d, rightMostOfLeftX + d];
  console.log(searchBoundaries);
  const leftCandidates = [];
  for (let i = 0; i < left.length; i++) {
    if (
      left[i][0] >= searchBoundaries[0] &&
      left[i][0] <= searchBoundaries[1]
    ) {
      leftCandidates.push(left[i]);
    }
  }

  console.log(leftCandidates);

  const rightCandidates = [];
  for (let i = 0; i < right.length; i++) {
    if (
      right[i][0] >= searchBoundaries[0] &&
      right[i][0] <= searchBoundaries[1]
    ) {
      rightCandidates.push(right[i]);
    }
  }

  console.log(rightCandidates);

  //
  //
  //

  const leftElects = [];
  for (let i = 0; i < rightCandidates.length; i++) {
    let noClosePoint = true;
    for (let j = 0; j < leftCandidates.length; j++) {
      if (Math.abs(rightCandidates[i][1] - leftCandidates[j][1]) <= d) {
        noClosePoint = false;
        leftElects.push(leftCandidates[j]);
      }
    }
    if (noClosePoint) {
      rightCandidates.splice(i, 1);
    }
  }

  // console.log(rightCandidates);

  for (let i = 0; i < leftElects.length; i++) {
    for (let j = 0; j < rightCandidates.length; j++) {
      let result = Math.sqrt(
        (leftElects[i][0] - rightCandidates[j][0]) ** 2 +
          (leftElects[i][1] - rightCandidates[j][1]) ** 2
      );
      if (result < d) {
        d = result;
      }
    }
  }

  console.log(d);
}

let end = performance.now();
console.log(`Execution time: ${end - start} milliseconds`);
