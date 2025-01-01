import fs, { read } from "fs"

/* 
.read() :- use for server-side scripting 
    - read() method use for read the file using file descriptor (a unique identifier that an OS assigns to a file when it is opened)
    - syntax :- fs.read(fd,buffer,offset,length, position,callback)
*/

// buffer 
const buffer = Buffer.alloc(1024);

// optimize 
const stats = fs.statSync("./file.txt") // provide the file / directory information synchronusly
// console.log(stats);
// buffer = Buffer.alloc(stats.size) // good way
/*
stats log : 
Stats {
  dev: 2928523745,
  mode: 33206,    
  nlink: 1,       
  uid: 0,
  gid: 0,
  rdev: 0,        
  blksize: 4096,  
  ino: 79094468455759980,
  size: 0,
  blocks: 0,
  atimeMs: 1735718175686.1682,
  mtimeMs: 1735718175686.1682,
  ctimeMs: 1735718175686.1682,
  birthtimeMs: 1735718175686.1682,
  atime: 2025-01-01T07:56:15.686Z,
  mtime: 2025-01-01T07:56:15.686Z,
  ctime: 2025-01-01T07:56:15.686Z,
  birthtime: 2025-01-01T07:56:15.686Z
}
*/

/* 
 open the file (file.txt)
 syntax:- .open(fileName, flag, mode, callback)
          - flag --> The operation in which the file has to be opened.  
                r - To open the file to read and throws an exception if the file doesn’t exist.
                r+ - Open the file to read and write. Throws an exception if the file doesn’t exist.
                rs+ - Open files in synchronous mode to read and write.
                ......
          - mode --> Sets the mode of the file i.e. r-read, w-write, r+ -readwrite. It sets to default as readwrite.
          - callback --> called after reading a file. It takes two parameters: 
                err: If any error occurs.
                data: A file descriptor, used by subsequent file operations.
 fs.close() method is used to asynchronously close the given file descriptor
 syntax:- fs.close( fd, callback )
*/
fs.open("./file.txt", "r", (err, fd) => {
    if (err) return console.error(err)
    console.log("file is open, Now Reading...");

    const buffer = Buffer.alloc(1024);

    fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead) => {
        if (err) return console.error("Error while Reading", err)
        if (bytesRead > 0) {
            console.log(`Bytes reads ${bytesRead}`);
            console.log(`Content:\n${buffer.toString('utf8', 0, bytesRead)}`);
        }

        // close callback take 1 args --> err
        fs.close(fd, (err) => {
            if (err) {
                console.log(err);
            }
            console.log("File closed successfully");
        })
    })
})
