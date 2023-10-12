// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

function sumNoDuplicates(numList) {
  numList = numList.sort((a, b) => a - b);
  let sum = 0;
  numList.forEach((element, index) => {
    if (element !== numList[index - 1] && element !== numList[index + 1])
      sum += element;
  });
  return sum;
}

// variant
function sumNoDuplicates(numList) {
  let sum = 0;
  numList.forEach((e) => {
    if (numList.indexOf(e) === numList.lastIndexOf(e)) sum += e;
  });
  return sum;
}
