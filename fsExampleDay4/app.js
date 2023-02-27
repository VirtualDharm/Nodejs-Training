const fs = require("fs")
const readStreamObj = fs.createReadStream("./mybigfile.txt")
let writeStreamObj = fs.createWriteStream("./generatethroughpipe.txt")
readStreamObj.pipe(writeStreamObj)