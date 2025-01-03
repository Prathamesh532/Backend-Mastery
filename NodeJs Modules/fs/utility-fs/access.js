import fs from "fs"

// syntax: .access(path,mode,callback(err))
// mode : 
//      fs.constants.F_OK: Check if the file exists.
//      fs.constants.R_OK: Check if the file is readable.
//      fs.constants.W_OK: Check if the file is writable.
//      fs.constants.X_OK: Check if the file is executable.

fs.access("./file.txt", fs.constants.F_OK, (err) => {
    if (err) {
        console.log("file is not exits");
    }
    else console.log("file found");
})
