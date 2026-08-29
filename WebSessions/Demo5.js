
// json object

stdObject =  {"rollno":1001, "sname":"Satyam", "course":"Java", "fees":15000.00};

console.log(stdObject);

console.log("Roll Number : " + stdObject.rollno);
console.log("Student Name : " + stdObject.sname);
console.log("Course Name : " + stdObject.course);
console.log("Course Fees : " + stdObject.fees);

// json Array

stdInfo = [
    {"rollno":1001, "sname":"Satyam", "course":"Java", "fees":15000.00},
    {"rollno":1002, "sname":"Ramana", "course":"Python", "fees":25000.00},
    {"rollno":1003, "sname":"Murali", "course":"Java", "fees":15000.00}
]

console.log(stdInfo);

console.log(stdInfo[0]);
console.log(stdInfo[1]);
console.log(stdInfo[2]);
console.log("-------------------");
for(let i=0;i<stdInfo.length;i++)
{
    console.log(stdInfo[i]);
}
console.log("-------------------");
for(let i=0;i<stdInfo.length;i++)
{
    console.log("Roll Number : " + stdInfo[i].rollno);
    console.log("Student Name : " + stdInfo[i].sname);
    console.log("Course Name : " + stdInfo[i].course);
    console.log("Course Fees : " + stdInfo[i].fees);
    console.log("-------------------");
}

//nested json object

personInfo = {"pname":"Muralidhar", 
"age":30, 
"address":{"dno":"1-121/A", "city":"Hyderabad"}, 
"phone":"9090912345"};

console.log("Person Name : " + personInfo.pname);
console.log("Person Age : " + personInfo.age);
console.log("Door No  : " + personInfo.address.dno);
console.log("City : " + personInfo.address.city);
console.log("Phone Number  : " + personInfo.phone);


