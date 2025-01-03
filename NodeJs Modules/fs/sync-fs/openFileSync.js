import fs from "fs"

console.log("start");

try {
    const data = fs.openSync("./file.txt", "r")
    console.log(data);
} catch (error) {
    console.log(error);
}

console.log("end");
