// Task 1
const swapVariables = (a, b) => {
  [a, b] = [b, a];

  console.log("a: ", a, "b: ", b);
};

swapVariables(1, 2);

// Task 2
const findExtra = (longAr, shortAr) => {
  if (longAr.length < shortAr.length) {
    let temp = longAr;
    longAr = shortAr;
    shortAr = temp;
  }

  let longSum = 0;
  let shortSum = 0;

  for (let i = 0; i < shortAr.length; i++) {
    longSum += longAr[i];
    shortSum += shortAr[i];
  }
  longSum += longAr[longAr.length - 1];

  return longSum - shortSum;
};

console.log("Extra number: ", findExtra([2, 3, 3, 15, 12], [3, 2, 15, 3]));
