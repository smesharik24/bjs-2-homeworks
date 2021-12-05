//1
function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}
Student.prototype.getFullName = function () {
  console.log(this.name + "" + this.gender + "" + this.age);
}
let student3 = new Student("Tony", "male", 37);
let student4 = new Student("Buzz", "female", 35);


//2

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

student3.setSubject("Algebra");

student4.setSubject("Fizyka");

//3
Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    this.marks = [mark];
    } else {
    this.marks.push(mark);     
   }
}


student4.addMark(2);
student4.addMark(3);
student4.addMark(2);

//4
Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){
    this.marks = [];
  } 
  marks.forEach( mark => this.marks.push(mark))
}

student3.addMarks(5, 2, 4);
student4.addMarks(1, 2, 3);


//5


Student.prototype.getAverage = function() {
  return this.marks.reduce((a, b) => a + b) / this.marks.length;
}

console.log(student3);
console.log(student4);

console.log(student3.getAverage());
console.log(student4.getAverage());



//6
Student.prototype.exclude = function (reason) {
  delete this.subjectName;
  delete this.marks;
  this.excluded = reason;
}

student3.exclude('low great')
console.log(student3);

