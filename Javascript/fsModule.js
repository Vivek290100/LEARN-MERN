const fs = require("fs");
// Writr file or Create file,      for synchronous writeFile (writeFileSynch) with try catch
fs.writeFile("file.txt", "hiii", (err)=>{
    if(err){
        console.log("got error",err);
        
    }else{
        console.log("created");
        
    }
})


// asynchronous reading
fs.readFile("file.txt", "utf8", (err,data)=>{
    if(err){
        console.log("err");
    }else{
        console.log(data);
        
    }
})


// synchronous reading
try{
    const data = fs.readFileSync("file.txt","utf8")
    console.log("data",data);
}catch(error){
    console.log(error);
    
}
console.log("123456789");



// asynchronous AppenfFile,      for synchronous append (appendFileSynch) with try catch
fs.appendFile("file.txt", "\nThis is new line",(error)=>{
    if(error){
        console.log("got error");
    }else{
        console.log("appended");
        
    }
})

// DeletFile
fs.unlink("file1.txt","hello", (error)=>{
    if(error){
        console.log("got rror");
    }else{
        console.log("deleted");
    }
})


// copy file
const fileone = "file.txt"
const filetwo = "file1.txt"
fs.copyFile(fileone,filetwo, (err)=>{
    if(err){
        console.log("couldn't copy");
    }else{
        console.log("copied");
    }
})
