const fs =require('fs');
 //create file 
fs.appendFile('welcome.txt','Hello Node \n',(err)=>{
    if (err) throw err;
    else{
        console.log('file created');
        fs.rename("welcome.txt", "hello.txt", () => {
            console.log("Successfully renamed!");
            fs.readFile('hello.txt', (err, data)=> {
                if (err) {
                   return console.error(err);
                }
                console.log("Asynchronous read: " + data.toString());
             });
          });
        
    }
   
})