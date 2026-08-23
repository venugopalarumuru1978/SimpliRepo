// Arrow Functions
//no parameter
const greet = () => "Hello World";
console.log(greet());

// single parameter
const double = n => n * 2;
console.log(double(10));

// multi parameter
const add = (a, b) => a + b;
console.log(add(10,20));

// block of code
const Cube = (x)=>{
    let cb = x*x*x;
    console.log(x + ' Cube Value ' + cb);
}

Cube(10);

