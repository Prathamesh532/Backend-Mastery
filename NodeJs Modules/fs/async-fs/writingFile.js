import fs from "fs";

// .open() tag ==> r-read , w-write, rw-read&write , a-append

/*

Parameters
fd: The file descriptor obtained after opening a file (e.g., using fs.open).
buffer: A Buffer object that holds the data you want to write (for the buffer version).
offset: The start position in the buffer to begin writing.
length: The number of bytes to write from the buffer.
position: The position in the file to start writing. If null, it writes at the current position.
string: The string to write (for the string version).
encoding: The encoding of the string (default: 'utf8').
callback: A callback function with (err, bytesWritten, buffer) arguments:
            err: Any error encountered.
            bytesWritten: The number of bytes written.
            buffer: The buffer that was written.

*/

const writingInFile = () => {
  try {
    fs.open("./file.txt", "a", (err, fd) => {
      if (err) return console.error(err);

      console.log("file open!");

      const buffer = new Buffer.from("the world of fs module");
      const data = "hello Prathamesh \n " + buffer;

      fs.write(fd, data, 0, "utf8", (err, written, buffer) => {
        if (err) console.error(err);

        console.log(`${written} bytes written to files`);
        console.log(`${buffer}`); // data appended

        fs.close(fd, (err) => {
          if (err) return err;
          console.log("file close");
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// writingInFile();
// syntax
const data = "\nhello from fs.readFile()"
fs.writeFile("./file.txt", data, "utf8", (err, buffer) => {
  if (err) return err
  console.log(`The data is added ${data}`);
})