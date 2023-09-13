const fs=require('fs');
const { parse } = require('querystring');

const data=fs.readFile("./fun.txt",
     (err,data)=>{
        if(!err)
            console.log(data.toString())
        else  
        throw err;
     }
)
