import fs from "fs"


// Syntax : fs.createWriteStream( path, options )
// Parameters: This method accept two parameters as mentioned above and described below:
// path: The path to the file where you want to write the data. If the file does not exist, it will be created.
// options: An optional parameter that allows you to specify options such as encoding, flags, and mode.

const writeStream = fs.createWriteStream("./file.txt")
writeStream.write("hello again")
writeStream.end()

let writer = fs.createWriteStream('./file.txt', {
    flags: 'w'
});

// Use fs.createReadStream() method 
// to read the file 
let reader = fs.createReadStream('./file.txt').pipe(writer);