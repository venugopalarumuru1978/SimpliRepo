
let x = [10,20,30,40,50];

console.log(x);

console.log("No of values : " + x.length)

x.push(60,70);
console.log(x);

x.pop();
console.log(x);

x.shift();
console.log(x);

x.unshift(100,200);
console.log(x);

x.splice(2,2);
console.log(x);

console.log("===========================");

let fruits =['Apple', 'Banana', 'Jaman'];
let sweets = ['Laddu', 'Mysorpack', 'Kheer'];

let frt_swts = fruits.concat(sweets);

console.log(fruits);
console.log(sweets);
console.log(frt_swts);

let str_frt_swts = frt_swts.join(',');

console.log(str_frt_swts);

let fs = frt_swts.slice(2,5);  // 2 is index, 5 is position
console.log(fs);

frt_swts.forEach((val) =>{
    console.log(val);
});

let y = [1,2,3,4,5,6,7,8,9];

console.log(y);

const evennos = y.filter((n)=> n%2==0);
console.log(evennos);

const  y_mul = y.map((n)=> n*10);
console.log(y_mul);

const sum =  y.reduce((acc, curval) =>{return acc+curval},0);
console.log(sum);
