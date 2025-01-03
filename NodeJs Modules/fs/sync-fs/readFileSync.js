import fs from "fs"

console.log("start");

try {
    const data = fs.readFileSync("./file.txt", "utf8")
    console.log(data);
} catch (error) {
    console.log(error);
}

console.log("end");
