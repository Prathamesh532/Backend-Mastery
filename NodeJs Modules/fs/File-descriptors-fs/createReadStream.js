import fs from "fs"

// syntax: .createReadStream(path,option)
// path: The path to the file where you want to write the data. If the file does not exist, it will be created.
// options: An optional parameter that allows you to specify options such as encoding, flags, and mode.

const readStream = fs.createReadStream("./file.txt")
readStream.on("data", (chunk) => {
    console.log(chunk);
})