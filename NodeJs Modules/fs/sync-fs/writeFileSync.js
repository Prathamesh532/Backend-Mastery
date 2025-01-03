import fs from "fs"

console.log("start");

try {
    const data = fs.writeFileSync("./file.txt", "hello again", "utf8")
    console.log("file data is updated");
} catch (error) {
    console.log(error);
}

console.log("end");
