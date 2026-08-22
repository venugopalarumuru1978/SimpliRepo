var x,y;  // global variables

function Add()
{
    let sum = parseFloat(x)+ parseFloat(y);
    console.log("Sum value is : " + sum);
}

function Minus()
{
    let sub = x-y;
    console.log("Minus value is : " + sub);
}

function Mul()
{
    let prd = x*y;
    console.log("Product value is : " + prd);
}

x = prompt("1st val ");
y = prompt("2nd val ");

Add();
Minus();
Mul();