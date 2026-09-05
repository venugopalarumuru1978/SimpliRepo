class  DemoParent
{
    getData(x, y)
    {
        this.x = x;
        this.y = y;
    }
}

class DemoChild extends DemoParent
{
    putData()
    {
        console.log("X val : " + this.x);
        console.log("Y val : " + this.y);
    }
}

var ch1 = new DemoChild();
ch1.getData(34,56);
ch1.putData();
