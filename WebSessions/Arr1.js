// Single Dimensional Array

let x = [10,20,30,40,50];

console.log(x);

console.log("1st value : " + x[0]);

//  counting no of values in an array :  length property is used
console.log("No of values : " + x.length);

for(let i=0;i<x.length;i++)
    console.log(x[i]);

x[2] = 300;
console.log(x);

let stdinfo = [1001, "Sravan", "Java", 15000.00];
console.log(stdinfo);

console.log("Roll Number : " + stdinfo[0]);
console.log("Student Name : " + stdinfo[1]);
console.log("Course : " + stdinfo[2]);
console.log("Fees : " + stdinfo[3]);