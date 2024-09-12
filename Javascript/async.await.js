async function promise () {
    try{
        const somedata = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await somedata.json()
        console.log(data)
    }catch(error){
        console.log("error",error);
        
    }
}

promise()