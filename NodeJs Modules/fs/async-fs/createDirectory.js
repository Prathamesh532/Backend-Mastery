import fs from "fs"


// fs.mkdir
// syntax: .mkdir(directoryName, mode, callback(err))
fs.mkdir("newDirectory", (err) => {
    if (err) return err
    console.log("Directory made");
})