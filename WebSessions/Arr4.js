//Double Dimensional Array

let x = [[10,20,30],[40,50,60]];
// all values
console.log(x);

// row by row
console.log(x[0]);
console.log(x[1]);

// value based on row and col index
console.log(x[0][0]);

for(let i=0;i<2;i++)
    console.log(x[i])

for(let i=0;i<2;i++)
{
    let stVal = "";
    for(let j=0;j<3;j++)
    {
        stVal = stVal + x[i][j] + "  ";
    }
    console.log(stVal);
}
    

