// Step 1: sort the point by their x axis

const points = [
  [-20, -8],
  [100, 0],
  [4, 90],
  [53, 4],
  [20, 24],
  [57, 2],
  [1, 2],
  [1, 3],
  [76, 7],
];

points.sort((a, b) => {
  return a[0] - b[0];
});

// console.log(points);

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

console.log(columns);
console.log(d);

// Okay so since I can't think of a reason why I would need to make slabs instead of just using the columns that I have used already, I'm going to try my method.

for (col = 0; col < columns.length - 1; col++) {
  let rightMostOfLeft = columns[col][columns[col].length - 1][0];

  let searchBoundaries = [rightMostOfLeft - d, rightMostOfLeft + d];

  console.log("---");
  console.log(searchBoundaries);
  console.log("---");

  const leftCandidates = [];
  for (let i = 0; i < columns[col].length; i++) {
    if (
      columns[col][i][0] >= searchBoundaries[0] &&
      columns[col][i][0] <= searchBoundaries[1]
    ) {
      leftCandidates.push(columns[col][i]);
    }
  }

  console.log(leftCandidates);

  const rightCandidates = [];
  for (let i = 0; i < columns[col + 1].length; i++) {
    if (
      columns[col + 1][i][0] >= searchBoundaries[0] &&
      columns[col + 1][i][0] <= searchBoundaries[1]
    ) {
      rightCandidates.push(columns[col + 1][i]);
    }
  }

  // Now that we have put all the points with an x coordinate within d distance of the x coordinate of the rightmost point in the left column into the candidates array, we need to see which of those have points have points with y cordinates less than d distance away in the left column from their y coordinates
  for (let i = 0; i < rightCandidates.length; i++) {
    let noClosePoint = true;
    for (let j = 0; j < leftCandidates.length; j++) {
      if (Math.abs(rightCandidates[i][1] - leftCandidates[j][1]) <= d) {
        noClosePoint = false;
      }
    }
    if (noClosePoint) {
      rightCandidates.splice(i, 1);
    }
  }

  console.log(rightCandidates);

  for (let i = 0; i < leftCandidates.length; i++) {
    for (let j = 0; j < rightCandidates.length; j++) {
      let result = Math.sqrt(
        (leftCandidates[i][0] - rightCandidates[j][0]) ** 2 +
          (leftCandidates[i][1] - rightCandidates[j][1]) ** 2
      );
      if (result < d) {
        d = result;
      }
    }
  }

  console.log(d);
}

// Don't need this anymore:
// let leftMostOfRight = columns[1][0][0];

// console.log(rightMostOfLeft);
// console.log(leftMostOfRight);
// console.log(divider);

// Don't need this anymore:
// let staggeredColumnBounds = [divider - d / 2, divider + d / 2];

// console.log(staggeredColumnBounds);

// Next: we need to grab all points in columns 0 and 1 with x coordinates within d/2 distance from the divider

// let leftAndRightColumns = [...columns[0], ...columns[1]];
// console.log(leftAndRightColumns);

// let candidates = [];
// for (let i = 0; i < leftAndRightColumns.length; i++) {
//   if (
//     leftAndRightColumns[i][0] > staggeredColumnBounds[0] &&
//     leftAndRightColumns[i][0] < staggeredColumnBounds[1]
//   ) {
//     candidates.push(leftAndRightColumns[i]);
//   }
// }

//
//
//

// 112323_0112: Okay time for sleepiezzzz
// This is super interesting idk if I'm on to something or if this actually going to be slower somehow than going grid by grid. I mean there's gonna be a little brute force algorithm but with the columns they each only border 1 or 2 other columns rather than the little squares which require checks with either 8!!!!! other squares because you gotta also check the ones that only touch corners, or if you stagger your checks you only need to check the ones that share a side but that's still a lot of calculations and they still need checks with 4 other boxes! Soooo I think I'm on to something here, curious to see how it works either way :)

// To sleep on, right now at most my method will require 6 comparisons in the case that d/2 includes every x coordinate in the left and right columns, can I optimize this? What about once I have my array of x coordinate candidates, I scan through those to see which of them have points within d distance of them on the y axis accross the divider and I only need to do this from one side
