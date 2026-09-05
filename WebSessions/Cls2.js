class Student
{
    getstdinfo(sname, sub1, sub2)
    {
        this.stdname = sname;
        this.sub1 = sub1;
        this.sub2 = sub2;
    }

    putstdinfo()
    {
        console.log("Student Name : " + this.stdname);
        console.log("Subject-1 Marks  : " + this.sub1);
        console.log("Subject-2 Marks : " + this.sub2);
    }
}

var std1 = new Student();
std1.getstdinfo('Kiran', 56,78);
std1.putstdinfo();

var std2 = new Student();
std2.getstdinfo('Kamal', 46,98);
std2.putstdinfo();


/*
this :-  it is used to declare variables  which can be used in 
all the functions of the class
        
    this.variable = value;
*/