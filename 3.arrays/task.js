function compareArrays(arr1, arr2) {
  let result;

  result =
  arr1.length === arr2.length &&
  arr1.every(function (element, index) {
    return element === arr2[index];
  });  

  return result; // boolean
}


function advancedFilter(arr) {
  let resultArr;
  
resultArr = arr.filter(function(num){
  return (num >0 && num % 3 === 0);
});

  resultArr = resultArr.map(function(num){
    return num*10;
  });

  return resultArr; // array
}
