import fs from "fs/promises"

const a = await fs.readFile("Nikhil.txt")

// const b= await fs.writeFile("Nikhil.txt", "\n This is Student")

const b = await fs.appendFile("Nikhil.txt", "\n Nikk is good")
console.log(a.toString(), b) 