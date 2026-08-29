// Spread Operator (...)

let arr1 = [10,20,30];
let arr1Clone = [...arr1];
console.log(arr1);
console.log(arr1Clone);

let arr2 = [...arr1, 60,80,56];
console.log(arr2);

let arr3 = [45,56,67,89];

let arr4 = [...arr1, ...arr3];

console.log(arr3);
console.log(arr4);

const stdObj =  {"rollno":1001, "sname":"Satyam", "course":"Java", "fees":15000.00};

const stdCloneObj = {...stdObj};

console.log(stdObj);
console.log(stdCloneObj);

const empObj = {"eno":123, "ename":"naresh" };

const info = {...stdObj, ...empObj};

console.log(info);

//==================

function add(x, y, z) {
    console.log(x + "  " + y + "   " + z);
    return x + y + z;
}

  let a = [10, 20, 30];
  //console.log(add(a));
  console.log(add(...a));
  

