class DemoStatic
{
    static Addition(x, y)
    {
        let sum = x+y;
        return sum;
    }

    static Minus(x, y)
    {
        let sub = x-y;
        return sub;
    }   
}

console.log(DemoStatic.Addition(10,20));
console.log(DemoStatic.Minus(10,2));
