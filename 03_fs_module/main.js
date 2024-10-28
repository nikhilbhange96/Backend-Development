const { error } = require("console")
const fs =require("fs")

console.log("Starting")

fs.writeFile('Nikhil.txt',"Nikhil is good boy",()=>{
    console.log("done")
    fs.readFile('Nikhil.txt',(error,data)=>{
        console.log(error,data.toString())
    })

    fs.appendFile('Nikhil.txt'," Nikk",(e,d)=>{
        console.log(d)
    })
    
})
console.log("end")