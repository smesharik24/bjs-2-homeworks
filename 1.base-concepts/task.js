"use strict";
function solveEquation(a, b, c) {
  if (a == 0)
   return "ошибка,  а=0 недопустимое значение";

  let arr = [];
    
  let D = b*b - 4*a*c;
  let x1, x2, x;

  if (D > 0) {
    x1 = (-b + Math.sqrt(D) )/(2*a);
    x2 = (-b - Math.sqrt(D) )/(2*a);
    
    arr = [x1, x2];
  }
  else  if (D == 0)  {
    x = -b/(2*a);
    arr = [x];
  }
  return arr; 
}































function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
