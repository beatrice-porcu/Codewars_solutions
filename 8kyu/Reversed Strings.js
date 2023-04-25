/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/
function solution(str) {
  let strArray = [...str];
  let reversedString = "";
  for (let i = strArray.length - 1; i >= 0; i--) {
    reversedString += strArray[i];
  }
  return reversedString;
}

function solution(str) {
  // crea array caratteri
  const strArray = [...str];
  let reverseStr = "";
  console.log(strArray);
  //scorri array al contrario

  for (let index = strArray.length - 1; index >= 0; index--) {
    reverseStr += strArray[index];
  }
  return reverseStr;
}
