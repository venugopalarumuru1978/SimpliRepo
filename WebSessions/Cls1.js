class DemoClass
{
    testInput(x,y)
    {
        console.log("X val : " + x);
        console.log("Y val : " + y);
        let sum = x+y;
        console.log("sum val " + sum);
    }
}

var dc1 = new DemoClass();   // to create an object
dc1.testInput(10,20);