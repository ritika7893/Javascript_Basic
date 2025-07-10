async function fetchData() {
  try {
    let result = await Promise.resolve("Data loaded");
    console.log(result);
  } catch (err) {
    console.log("Error: ", err);
  }
}

fetchData();
async function fd(){
    try{
        let result=await Promise.reject("Data")
        console.log(result)
    }
    catch(err){
        console.log("Error: ", err);
    }
}
fd()
