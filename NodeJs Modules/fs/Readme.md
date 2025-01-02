## Synchronous Operations

- fs.openSync, fs.writeSync, fs.unlinkSync, fs.appendFileSync, and fs.writeFileSync are synchronous.

# Essential `fs` Module Methods

## 1. Asynchronous Methods

These methods are non-blocking and execute their callback once the operation is complete.

### File System Operations

1. **`fs.open(path, flags, callback)`**

   - Opens a file and passes the file descriptor to the callback.
   - **`flags`** could be `r`, `w`, `a`, etc.

   ```javascript
   fs.open("file.txt", "r", (err, fd) => {
     console.log(fd);
   });
   ```

2. **`fs.read(fd, buffer, offset, length, position, callback)`**

   - Reads data from a file given a file descriptor (`fd`).

   ```javascript
   fs.read(fd, Buffer.alloc(1024), 0, 1024, 0, (err, bytesRead, buffer) => {
     console.log(buffer.toString());
   });
   ```

3. **`fs.write(fd, buffer, offset, length, position, callback)`**

   - Writes data to a file at a specified position given a file descriptor (`fd`).

   ```javascript
   fs.write(fd, Buffer.from("Hello World"), 0, 11, 0, (err, written) => {
     console.log(`${written} bytes written`);
   });
   ```

4. **`fs.close(fd, callback)`**

   - Closes the file descriptor (`fd`).

   ```javascript
   fs.close(fd, (err) => {
     console.log("File closed");
   });
   ```

5. **`fs.appendFile(path, data, callback)`**

   - Appends data to a file.

   ```javascript
   fs.appendFile("file.txt", "New Data", (err) => {
     console.log("Data appended");
   });
   ```

6. **`fs.readFile(path, encoding, callback)`**

   - Reads a file and returns its content.

   ```javascript
   fs.readFile("file.txt", "utf8", (err, data) => {
     console.log(data);
   });
   ```

7. **`fs.writeFile(path, data, encoding, callback)`**

   - Writes data to a file (creates or overwrites).

   ```javascript
   fs.writeFile("file.txt", "Hello World", "utf8", (err) => {
     console.log("File written");
   });
   ```

8. **`fs.rename(oldPath, newPath, callback)`**

   - Renames or moves a file.

   ```javascript
   fs.rename("oldfile.txt", "newfile.txt", (err) => {
     console.log("File renamed");
   });
   ```

9. **`fs.unlink(path, callback)`**

   - Deletes a file.

   ```javascript
   fs.unlink("file.txt", (err) => {
     console.log("File deleted");
   });
   ```

10. **`fs.mkdir(path, callback)`**

    - Creates a new directory.

    ```javascript
    fs.mkdir("newDir", (err) => {
      console.log("Directory created");
    });
    ```

11. **`fs.readdir(path, callback)`**

    - Reads the contents of a directory.

    ```javascript
    fs.readdir("folder/", (err, files) => {
      console.log(files);
    });
    ```

12. **`fs.stat(path, callback)`**
    - Returns information about a file or directory.
    ```javascript
    fs.stat("file.txt", (err, stats) => {
      console.log(stats.isFile());
    });
    ```

## 2. Synchronous Methods

These methods block the event loop until they complete and return the result or throw an error.

### File System Operations

1. **`fs.openSync(path, flags)`**

   - Synchronously opens a file and returns a file descriptor.

   ```javascript
   const fd = fs.openSync("file.txt", "r");
   ```

2. **`fs.readFileSync(path, encoding)`**

   - Synchronously reads the contents of a file.

   ```javascript
   const data = fs.readFileSync("file.txt", "utf8");
   ```

3. **`fs.writeFileSync(path, data, encoding)`**

   - Synchronously writes data to a file (overwrites if it exists).

   ```javascript
   fs.writeFileSync("file.txt", "Hello World", "utf8");
   ```

4. **`fs.renameSync(oldPath, newPath)`**

   - Synchronously renames or moves a file.

   ```javascript
   fs.renameSync("oldfile.txt", "newfile.txt");
   ```

5. **`fs.unlinkSync(path)`**

   - Synchronously deletes a file.

   ```javascript
   fs.unlinkSync("file.txt");
   ```

6. **`fs.mkdirSync(path)`**

   - Synchronously creates a new directory.

   ```javascript
   fs.mkdirSync("newDir");
   ```

7. **`fs.readdirSync(path)`**

   - Synchronously reads the contents of a directory.

   ```javascript
   const files = fs.readdirSync("folder/");
   ```

8. **`fs.statSync(path)`**
   - Synchronously returns information about a file or directory.
   ```javascript
   const stats = fs.statSync("file.txt");
   ```

## 3. Utility Methods

1. **`fs.access(path, mode, callback)`**

   - Checks if a file is accessible (exists and can be read/written).

   ```javascript
   fs.access("file.txt", fs.constants.F_OK, (err) => {
     console.log(err ? "File not found" : "File exists");
   });
   ```

2. **`fs.exists(path, callback)`** _(deprecated)_

   - Checks if a file exists.

   ```javascript
   fs.exists("file.txt", (exists) => {
     console.log(exists ? "File exists" : "File not found");
   });
   ```

3. **`fs.constants`**

   - A set of constants used with `fs.access()` and other methods. For example:
     - `fs.constants.F_OK`: Check if the file exists.
     - `fs.constants.R_OK`: Check if the file is readable.
     - `fs.constants.W_OK`: Check if the file is writable.
     - `fs.constants.X_OK`: Check if the file is executable.

   ```javascript
   fs.access("file.txt", fs.constants.R_OK, (err) => {
     console.log(err ? "No read permission" : "Readable file");
   });
   ```

4. **`fs.watch(path, options, listener)`**
   - Watches for changes in a file or directory and triggers a callback.
   ```javascript
   fs.watch("file.txt", (event, filename) => {
     console.log(event, filename);
   });
   ```

## 4. File Descriptors and Buffers

1. **`fs.createReadStream(path, options)`**

   - Creates a readable stream to read a file.

   ```javascript
   const readStream = fs.createReadStream("file.txt");
   readStream.on("data", (chunk) => {
     console.log(chunk);
   });
   ```

2. **`fs.createWriteStream(path, options)`**

   - Creates a writable stream to write data to a file.

   ```javascript
   const writeStream = fs.createWriteStream("file.txt");
   writeStream.write("Hello World");
   writeStream.end();
   ```

3. **`fs.readFileSync(path, encoding)`** _(Returns a Buffer when no encoding is passed)_

## Summary of Key Methods

- **Asynchronous file operations**: `fs.open`, `fs.read`, `fs.write`, `fs.unlink`, `fs.appendFile`, `fs.readFile`, `fs.writeFile`, `fs.rename`, `fs.stat`, `fs.readdir`, `fs.mkdir`, `fs.access`, `fs.watch`
- **Synchronous file operations**: `fs.openSync`, `fs.readFileSync`, `fs.writeFileSync`, `fs.renameSync`, `fs.unlinkSync`, `fs.mkdirSync`, `fs.readdirSync`, `fs.statSync`
- **Streams**: `fs.createReadStream`, `fs.createWriteStream`
