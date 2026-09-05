class  ConsDemo
{
    constructor()
    {
        console.log("It is Constructor");
    }
}

var  c1 = new ConsDemo();

class Employee
{
    constructor(ename, sal)
    {
        console.log("Constructor");
        this.ename = ename;
        this.sal = sal;
    }

    printEmpInfo()
    {
        console.log("Employee name : " + this.ename);
        console.log("Employee Salary : " + this.sal);
        let cm = this.sal*0.10;
        console.log("10% comm " + cm);
    }
}

var emp1 = new Employee('Ravi', 15000);
emp1.printEmpInfo();

var emp2 = new Employee('Kiran', 25000);
emp2.printEmpInfo();

