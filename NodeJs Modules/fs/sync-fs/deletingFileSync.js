import fs from "fs"

console.log("start");

try {
    const data = fs.unlinkSync("./file.txt")
    console.log(data);
} catch (error) {
    console.log(error);
}

console.log("end");
