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

// Step 2: partition the points into two halves based on their x coordinates

function divide(points) {
  // Using a middle variable to make sure our partition has equal points on either side, then splicing our points array into left and right arrays.
  const middle = Math.floor(points.length / 2);
  const left = points.splice(0, middle);
  const right = points;
  console.log(left);
  console.log(right);
}

divide(points);

// Step 3: find the smallest distance between pairs of distinct points on the left side and the right side of the partition. Then compare those distances to each other to see which is smaller and use that as d
