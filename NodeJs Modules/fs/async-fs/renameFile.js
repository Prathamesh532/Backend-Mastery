import fs from "fs"

// fs.rename()
// syntax: rename(oldPath, newPath, callback(err))
fs.rename("./file.txt", "./new-file.txt", (err) => {
    if (err) return err
    console.log("file has renamed");
})