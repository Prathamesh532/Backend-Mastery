# Node.js Path Module README

The Node.js `path` module provides utilities for working with file and directory paths. This module is particularly useful for manipulating file paths in a cross-platform manner, ensuring compatibility between different operating systems.

## Installation

The `path` module is built into Node.js, so you don't need to install it separately. You can simply import it in your JavaScript files.

## Methods

### 1. `path.join([...paths])`

Joins all given path segments together using the platform-specific separator as a delimiter.

**Syntax:**
`path.join(path1, path2, ...);`

**Example:**

```
let fullPath = path.join("C", "users", "pk", "desktop");
console.log(fullPath); // Outputs: C\users\pk\desktop
```

### 2. `path.resolve([...paths])`

Resolves a sequence of paths or path segments into an absolute path. The resulting path is constructed from the current working directory and the given paths.

**Syntax:**
`path.resolve(path1, path2, ...);`

**Example:**

```
let absolutePath = path.resolve("C", "users", "pk", "desktop");
console.log(absolutePath); // Outputs an absolute path based on the current working directory
```

### 3. `path.basename(path[, ext])`

Returns the last portion of a path, which can be useful for extracting the filename.

**Syntax:**
`path.basename(path, [ext]);`

**Example:**

```
let baseName = path.basename("C/users/pk/desktop/pk.txt"); // pk.txt
let baseNameWithoutExt = path.basename("C/users/pk/desktop/pk.txt", ".txt"); // pk
console.log(baseNameWithoutExt);
```

### 4. `path.dirname(path)`

Returns the directory name of a given path.

**Syntax:**
`path.dirname(path);`

**Example:**

```
let dirName = path.dirname("C/users/pk/desktop/pk.txt");
console.log(dirName); // C/users/pk/desktop
```

### 5. `path.extname(path)`

Returns the extension of the given file path.

**Syntax:**
`path.extname(path);`

**Example:**

```
let extension = path.extname("C/users/pk/desktop/pk.txt");
console.log(extension); // .txt
```

### 6. `path.isAbsolute(path)`

Determines if the provided path is an absolute path.

**Syntax:**
`path.isAbsolute(path);`

**Example:**

```
let isAbsolutePath = path.isAbsolute("/users/pk/desktop/pk.txt"); // true
let isNotAbsolutePath = path.isAbsolute("users/pk/desktop/pk.txt"); // false
console.log(isNotAbsolutePath);
```

### 7. `path.relative(from, to)`

Calculates the relative path from one directory to another.

**Syntax:**
`path.relative(from, to);`

**Example:**

```
let relativePath = path.relative("C/users/pk/", "C/users/pk/desktop/pk.txt");
console.log(relativePath); // desktop\pk.txt
```

### 8. `path.parse(path)`

Returns an object whose properties represent significant elements of the given path.

**Syntax:**
`path.parse(path);`

**Example:**

```
let parsedPath = path.parse("/users/pk/desktop/pk.txt");
console.log(parsedPath);
Outputs:
{
root: '/',
dir: '/user/pk/desktop',
base: 'pk.txt',
ext: '.txt',
name: 'pk'
}
```

### 9. `path.format(pathObject)`

Takes a path object and returns a string representation of the full path.

**Syntax:**
`path.format(pathObject);`

**Example:**

```
const pathObj = {
root: "/",
dir: "/user/pk/desktop",
base: "pk.txt",
ext: ".txt",
name: "pk",
};
let formattedPath = path.format(pathObj);
console.log(formattedPath); // /user/pk/desktop\pk.txt
```

## Conclusion

The `path` module in Node.js is an essential tool for developers working with file paths. It provides a comprehensive set of methods that simplify common tasks related to file and directory manipulation, ensuring that your applications can handle paths in a reliable and platform-independent way. For more information, refer to the [official Node.js documentation](https://nodejs.org/api/path.html).
