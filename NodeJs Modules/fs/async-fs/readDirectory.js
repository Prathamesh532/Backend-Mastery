import fs from "fs"

// fs.readdir
// syntax: .readdir(path, callback(err, files))
fs.readdir("./newDirectory/", (err, files) => {
    if (err) return err
    console.log("files: ", files);
})