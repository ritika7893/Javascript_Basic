let p = new Promise((resolve, reject) => {
    let st = false;
    if (st)
        resolve("task completed"); // will not run because st is false
    else
        reject("error"); // this gets called
});

p.then(value => {
    console.log(value); // won't run
})
.catch(err => {
    console.log(err); // logs: "error"
});
