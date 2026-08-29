// Destructuring

const arr1 = [10,20,30];

let [x, y, z] = arr1;

console.log(x);
console.log(y);
console.log(z);

const user = { name: 'Alice', age: 25, role: 'Admin' };

// 1. Basic Destructuring
const { name, role } = user;
console.log(name);
console.log(role);

// 2. Renaming Variables (using a colon)
const { name: userName, age: userAge } = user;
console.log(userName); 
console.log(userAge); 

const colors = ['red', 'green', 'blue'];

// Skipping Values (leave an empty space between commas)
const [primary, , tertiary] = colors;
console.log(primary);
console.log(tertiary);

// Swapping Variables (no temporary variable needed!)
let a = 1;
let b = 2;

console.log(a);
console.log(b);

/*
let temp = a;
a = b;
b = temp;
*/

[a, b] = [b, a]; 
console.log(a);
console.log(b);

const product = { id: 101, title: 'Laptop', price: 999 };

function displayProduct({ title, price }) {
  console.log(`${title} costs $${price}`);
  console.log(title + " Cost is $" + price);
}

displayProduct(product); // 'Laptop costs $999'





