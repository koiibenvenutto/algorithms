// length   | 1   2   3   4   5   6   7   8
// --------------------------------------------
// price    | 1   5   8   9  10  17  17  20

// If we don't cut the rod at all we end up with a value of 20

// length   | 1   2
// -----------------
// price    | 1   5

// Let's use sub problems to find learnings
// What is the solution and how did I get to it?
// When there are only two options we can look at it like this:
// Math.max(1 + 1, 5)
// What about with 3?

// length   | 1   2   3
// ---------------------
// price    | 1   5   8

// 1x3 = 3, 1x1 + 2x1 = 6, 3x1 = 8

// So it's still not complicated to figure out but what about with 4?

// Ah what if slowly adding these in reverse gave us the answer?
// What about maybe weighting the cuts, which lengths have the highest value to length ratio
// 2 -> 2/5
// 3 -> 3/8
// 6 -> 6/17

// Will simply picking the length with the highest length/value ratio as many times as possible always get us the correct solution?
// No there are times when it would not. This is similar to the changemaking problem where you would think that just picking the highest value coin that is less than the total change needed would be the way to go but it actually doesn't work in situations where the amount of change needed is lets say 2x the second highest coin, and picking the highest value coin leaves a remainder that requires two coins to fit evenly. So I think I can learn a lot by having a look at that problem.

// So in that problem the solution ended up looking like this:
// F(v) = 1 + min [ F(v - 1), F(v - 5), F(v - 10), F(V - 25) ]

// So how can we relate this back to the rod cutting problem?

// function maxValue(rod) {
//   if (rod.length < 2) {
//     return 1;
//   } else if (rod.length < 1) {
//     return 0;
//   }

//   let value = 0;
//   let max = 0;

//   for (let i = rod.length - 1; i >= 0; i--) {
//     console.log(`i: ${i}`);
//     max = Math.max(max, maxValue(rod.slice(0, i)));
//   }
//   console.log(max);

//   return max;
// }

// console.log(maxValue(rod));

const rod = [1, 5, 8, 9, 10];

function maxValue(rod) {
  if (rod.length < 2) {
    return 1;
  } else if (rod.length < 1) {
    return 0;
  }

  let value = 0;

  for (let i = rod.length - 2; i <= 0; i--) {
    value = rod[i] + Math.max(rod[i]);
  }
}

function maxPath(triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] =
        triangle[i][j] + Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  console.log(triangle);
  console.log(triangle[0][0]);
}
