let checkEven = new Promise((su_info, fa_info) =>{
            let n = 7;
            if(n%2==0)
            su_info('number is even-success');
            else
            fa_info('number is odd - reject');
    });

// implement 
checkEven
    .then((msg)=>{console.log(msg)})  // success operation
    .catch((err)=>{console.log(err)}); // failure operation

// Example 2  -- all() method
/*
const promise1 = Promise.resolve(10);

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve(20), 1000);
});

const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

  console.log("---------------------------");

  const testProm = Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
]);
    
testProm.then((results) => console.log(results));
*/
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 600, "one");
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "two");
});

Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
});
