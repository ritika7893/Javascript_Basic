/*✅ Task:
Create a function fetchUser() that returns a Promise which resolves to "User data loaded" after 2 seconds.

Create an async function called loadUser() that:

Waits for fetchUser() using await

Logs the result

Call loadUser() to start the process.*/
function fetchUser() {
return p=new Promise((resolve,reject)=>{
     setTimeout(()=>resolve("Loading data"),2000)
 

});
}
async function loadUser() {
      console.log("Loading user...");
    try{
        let result=await fetchUser()
        console.log(result)
    }
    catch(err){
        console.log("Error: ", err);
  
}
}
loadUser();
