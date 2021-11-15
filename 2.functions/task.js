// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
    min = Infinity;
    max = - Infinity;
    sum = 0;

  for ( let i=0; i<arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    } 
    if (arr[i] > max){
      max = arr[i];
    } 
    sum = sum + arr[i];
  }
    avg = sum / arr.length;
    avg = Number(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
  for (let i=0; i<arr.length; i++){
    sum = sum + arr[i];
  }

  return sum;
}


// Задание 3
function worker2(arr) {

  let min, max;
  min = Infinity;
  max = - Infinity;

  for (let i=0; i<arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    } 
    if (arr[i] > max){
      max = arr[i];
    } 
  }
  
  return max - min;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i<arrOfArr.length; i++){
    a = func(arrOfArr[i]);
    if (a>max ){
      max = a;
    }
  }
  
  return max;
}