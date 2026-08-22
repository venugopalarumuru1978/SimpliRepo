// function defintion
function TestFun() //no arg and no return value
{
    let x = 10;
    console.log("X value is " + x);
}

function  Addition(x, y)  // with arguments and without return value.
{
    console.log("X value is : " + x);
    console.log("Y value is : " + y);
    let sm = x+y;
    console.log("Sum Value is : " + sm);
}

function  Square(x)  //  with arg and with return val
{
    let sqr = x*x;
    return sqr;
}


// calling area

TestFun();  // calling the function
Addition(10,20);
Addition(11.45,22.56);

let res = Square(10);
console.log("Square value is " + res);