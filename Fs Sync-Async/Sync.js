const fs=require('fs')

const file_detail_1="intro to Node.js Module"

fs.writeFileSync("Sync.txt",file_detail_1,()=>{
  console.log("That is Sync...")
})

const file_detail_2=" Module System"

fs.appendFileSync("Sync.txt",file_detail_2)

const a= fs.readFileSync("Sync.txt")

const ans=(a)=>{
  console.log(a.toString())
}
ans(a)


fs.renameSync("Sync.txt","sync_task.txt")
fs.unlinkSync("sync_task.txt")






