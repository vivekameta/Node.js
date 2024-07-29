const { readFile } = require('fs')

const fs=require('fs').promises


async function Async(){
    const detail_1="1. Intro to node.js in Async... "
    const detail_2="2. Intro to node.js in Module System"
     try {
        await fs.writeFile("Async.txt",detail_1)
        await fs.appendFile("Async.txt",detail_2)
       const a=await fs.readFile("Async.txt")
       console.log(a.toString())

       await fs.rename("Async.txt","async.txt")
       await fs.link('async.txt','abc.txt')

     }
     catch(err)
     {
       console.log("Error : ",err)
     }
}

Async()