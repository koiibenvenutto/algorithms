// STEP 1: Compare the target value to the middle element of the array.
// STEP 2: If the target value is equal to the middle element, return the index.
// STEP 3: If the target value is less than the middle element, continue the search in the lower half of the array.
// STEP 4: If the target value is greater than the middle element, continue the search in the upper half of the array.
// STEP 5: If the lower bound exceeds the upper bound, the target is not in the array.

// So obviously we're taking advantage of the extra information that we get from having a pre sorted array. Let's make one of those to use:

const sortedeArr = [1, 4, 5, 6, 8, 9, 12, 34, 65, 79];
const longArray = [
  8, 19, 33, 38, 41, 42, 50, 56, 67, 78, 87, 91, 94, 106, 111, 123, 136, 149,
  153, 154, 159, 174, 176, 184, 189, 204, 212, 228, 236, 245, 249, 252, 267,
  273, 277, 292, 294, 318, 328, 365, 372, 377, 379, 390, 395, 434, 439, 445,
  448, 471, 474, 492, 500, 521, 522, 531, 541, 543, 545, 547, 551, 573, 578,
  589, 592, 593, 615, 620, 621, 642, 648, 676, 688, 701, 723, 738, 756, 759,
  771, 780, 795, 796, 799, 809, 813, 821, 822, 824, 825, 827, 852, 858, 861,
  867, 874, 888, 915, 923, 946, 956, 959, 962, 970, 976, 995, 1004, 1015, 1018,
  1019, 1021, 1062, 1093, 1094, 1102, 1114, 1123, 1180, 1181, 1186, 1188, 1199,
  1206, 1223, 1234, 1237, 1260, 1270, 1277, 1280, 1282, 1285, 1286, 1308, 1325,
  1341, 1349, 1359, 1360, 1361, 1370, 1372, 1374, 1386, 1387, 1394, 1418, 1422,
  1434, 1451, 1481, 1489, 1495, 1496, 1501, 1508, 1521, 1529, 1532, 1538, 1549,
  1551, 1559, 1566, 1574, 1591, 1603, 1613, 1622, 1683, 1692, 1702, 1706, 1709,
  1714, 1724, 1735, 1736, 1758, 1769, 1785, 1787, 1807, 1809, 1811, 1828, 1829,
  1843, 1850, 1878, 1887, 1904, 1932, 1943, 1952, 1962, 1967, 1969, 1977, 1987,
  1993, 2022, 2042, 2049, 2052, 2072, 2091, 2097, 2107, 2141, 2148, 2149, 2161,
  2163, 2165, 2187, 2190, 2191, 2200, 2212, 2235, 2240, 2261, 2265, 2276, 2285,
  2294, 2317, 2337, 2349, 2352, 2354, 2361, 2375, 2382, 2432, 2449, 2453, 2482,
  2500, 2505, 2519, 2526, 2527, 2530, 2565, 2574, 2589, 2592, 2593, 2599, 2600,
  2607, 2610, 2613, 2633, 2643, 2644, 2645, 2649, 2650, 2659, 2666, 2676, 2685,
  2686, 2691, 2692, 2706, 2719, 2730, 2731, 2732, 2745, 2749, 2761, 2766, 2774,
  2777, 2779, 2785, 2799, 2829, 2835, 2839, 2844, 2849, 2856, 2865, 2885, 2891,
  2896, 2911, 2924, 2926, 2933, 2960, 2962, 2969, 2971, 2974, 2977, 2988, 3003,
  3021, 3026, 3027, 3030, 3031, 3045, 3046, 3060, 3062, 3073, 3074, 3076, 3079,
  3086, 3098, 3102, 3122, 3143, 3145, 3147, 3154, 3172, 3186, 3201, 3207, 3213,
  3214, 3235, 3250, 3253, 3271, 3273, 3282, 3285, 3286, 3288, 3308, 3331, 3333,
  3345, 3349, 3351, 3356, 3363, 3373, 3384, 3385, 3390, 3394, 3395, 3400, 3405,
  3408, 3409, 3427, 3435, 3443, 3452, 3472, 3502, 3512, 3520, 3524, 3527, 3548,
  3555, 3596, 3603, 3609, 3623, 3629, 3632, 3655, 3670, 3679, 3700, 3701, 3706,
  3710, 3714, 3721, 3722, 3723, 3728, 3746, 3763, 3770, 3774, 3776, 3806, 3808,
  3843, 3849, 3863, 3869, 3900, 3907, 3916, 3938, 3945, 3958, 3961, 3972, 3976,
  3989, 4010, 4011, 4057, 4065, 4071, 4078, 4083, 4096, 4106, 4118, 4124, 4132,
  4137, 4149, 4166, 4172, 4176, 4181, 4191, 4192, 4207, 4220, 4221, 4235, 4238,
  4258, 4265, 4267, 4274, 4278, 4286, 4315, 4321, 4323, 4333, 4349, 4350, 4363,
  4387, 4403, 4410, 4429, 4435, 4446, 4455, 4465, 4473, 4474, 4503, 4508, 4524,
  4544, 4555, 4570, 4580, 4587, 4590, 4592, 4610, 4630, 4646, 4654, 4659, 4667,
  4680, 4681, 4682, 4686, 4706, 4712, 4724, 4728, 4744, 4745, 4746, 4748, 4759,
  4767, 4771, 4804, 4811, 4821, 4825, 4836, 4837, 4839, 4863, 4870, 4875, 4887,
  4888, 4890, 4893, 4897, 4911, 4940, 4951, 4997, 5000, 5007, 5046, 5059, 5071,
  5075, 5083, 5093, 5102, 5110, 5112, 5116, 5126, 5130, 5137, 5148, 5155, 5174,
  5176, 5185, 5189, 5191, 5204, 5208, 5220, 5230, 5235, 5239, 5242, 5243, 5254,
  5256, 5264, 5292, 5305, 5316, 5318, 5321, 5348, 5370, 5388, 5392, 5395, 5398,
  5404, 5426, 5432, 5443, 5445, 5465, 5467, 5476, 5503, 5508, 5509, 5516, 5524,
  5537, 5551, 5562, 5564, 5569, 5570, 5571, 5572, 5592, 5601, 5604, 5622, 5628,
  5629, 5641, 5642, 5645, 5658, 5659, 5667, 5675, 5691, 5694, 5696, 5722, 5723,
  5733, 5749, 5752, 5772, 5778, 5803, 5804, 5807, 5813, 5815, 5822, 5839, 5867,
  5871, 5872, 5873, 5895, 5904, 5918, 5920, 5938, 5939, 5942, 5973, 5974, 5981,
  5989, 6000, 6008, 6010, 6013, 6017, 6018, 6031, 6046, 6052, 6062, 6078, 6081,
  6085, 6088, 6101, 6108, 6121, 6135, 6154, 6158, 6162, 6171, 6186, 6197, 6206,
  6208, 6222, 6230, 6255, 6260, 6273, 6275, 6308, 6319, 6327, 6331, 6334, 6365,
  6370, 6371, 6389, 6427, 6440, 6471, 6479, 6500, 6503, 6519, 6522, 6524, 6550,
  6553, 6565, 6567, 6575, 6621, 6654, 6655, 6668, 6678, 6681, 6684, 6694, 6705,
  6712, 6714, 6721, 6740, 6744, 6745, 6746, 6753, 6755, 6764, 6767, 6800, 6810,
  6815, 6859, 6889, 6890, 6898, 6906, 6935, 6937, 6949, 6964, 6966, 6988, 6991,
  6995, 7007, 7019, 7026, 7036, 7051, 7056, 7062, 7093, 7095, 7096, 7102, 7127,
  7132, 7137, 7159, 7160, 7166, 7179, 7190, 7195, 7201, 7223, 7242, 7255, 7264,
  7267, 7289, 7291, 7302, 7309, 7329, 7354, 7356, 7365, 7381, 7411, 7421, 7422,
  7423, 7441, 7443, 7452, 7468, 7484, 7485, 7522, 7528, 7530, 7532, 7535, 7540,
  7548, 7576, 7586, 7587, 7608, 7616, 7625, 7636, 7650, 7666, 7684, 7687, 7690,
  7691, 7716, 7717, 7718, 7775, 7776, 7810, 7821, 7830, 7832, 7836, 7854, 7858,
  7865, 7866, 7868, 7870, 7871, 7872, 7883, 7884, 7890, 7892, 7894, 7902, 7904,
  7910, 7912, 7918, 7926, 7946, 7954, 7969, 7981, 7984, 7988, 8023, 8067, 8070,
  8112, 8118, 8141, 8198, 8203, 8216, 8226, 8236, 8264, 8281, 8295, 8309, 8338,
  8342, 8349, 8350, 8360, 8361, 8362, 8374, 8382, 8432, 8436, 8445, 8456, 8457,
  8473, 8477, 8498, 8500, 8502, 8514, 8523, 8538, 8563, 8568, 8585, 8588, 8607,
  8619, 8620, 8622, 8626, 8643, 8647, 8673, 8702, 8705, 8712, 8716, 8727, 8738,
  8743, 8746, 8790, 8795, 8804, 8809, 8821, 8833, 8842, 8854, 8868, 8877, 8878,
  8895, 8934, 8942, 8954, 8957, 8969, 8971, 8979, 8987, 9010, 9018, 9019, 9020,
  9021, 9040, 9043, 9054, 9068, 9071, 9072, 9100, 9102, 9108, 9112, 9113, 9114,
  9116, 9132, 9138, 9154, 9159, 9161, 9164, 9168, 9190, 9192, 9241, 9289, 9290,
  9304, 9325, 9326, 9330, 9342, 9350, 9364, 9365, 9371, 9390, 9395, 9408, 9421,
  9429, 9437, 9446, 9471, 9486, 9494, 9500, 9506, 9507, 9511, 9514, 9519, 9524,
  9527, 9534, 9536, 9554, 9560, 9579, 9582, 9588, 9606, 9613, 9615, 9616, 9628,
  9629, 9637, 9648, 9656, 9660, 9666, 9675, 9680, 9716, 9723, 9728, 9732, 9741,
  9749, 9758, 9762, 9765, 9769, 9786, 9795, 9810, 9823, 9824, 9830, 9844, 9846,
  9853, 9857, 9862, 9871, 9876, 9878, 9880, 9886, 9900, 9904, 9914, 9916, 9923,
  9950, 9954, 9955, 9964, 9966, 9980, 9989, 9994,
];

function binarySearch(array, target, globalPosition = 0) {
  // Base case:
  if (array.length < 2 && array[0] !== target) {
    return "target not in array";
  } else if (array.length < 2 && array[0] === target) {
    return globalPosition;
  }

  // Middle:
  let middle = Math.floor(array.length - 1 / 2);

  // The recursive part:
  if (target === array[middle]) {
    return middle + globalPosition;
  } else if (target < array[middle]) {
    return binarySearch(array.slice(0, middle), target, globalPosition);
  } else {
    return binarySearch(array.slice(middle + 1), target, middle);
  }
}

console.log(binarySearch(longArray, 6275));

// Okay so the next step is: If the lower bound exceeds the upper bound, the target is not in the array. What does this mean, I'm going to break this down.

// const testArr = [0];
// console.log(testArr.length);
// console.log(testArr[0]);

// Okay so now I have the first part working, it finds the element in the array. Now I see why they use upper and lower bounds. It allows you to know where the number is in the context of the original array when you find it.

// 111223_2029
// Okay so I just want to start fresh today and see if I can make this work.
// WOW I did it! Hell yeah!
