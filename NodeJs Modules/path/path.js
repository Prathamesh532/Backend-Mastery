import path from "path";

/* path.join([...paths]) */
// .join() ---> join all paths and make full path
// syntax: path.join(path1, path2, path3, path4, path5, path6, path7, path8, path9, path10)
let path1 = path.join("C", "users", "pk", "desktop");
console.log(path1); // C\users\pk\desktop

/* path.resolve([...paths]) */
// .resolve() ---> provide a path a ACTUAL current working directory + the given paths
// syntax: path.resolve(path1, path2, ...)
let resolve = path.resolve("C", "users", "pk", "desktop");
console.log(resolve); // C:\Users\Kalek\OneDrive\Desktop\PROJECTS\Backend\NodeJs\NodeJs Modules\path\C\users\pk\desktop

/* path.basename(path[, ext]) */
// .basename() ---> provide a base name of files the given path
// syntax: path.basename(path , option[which can a extenion]) with option the file .ext will not return
let basename = path.basename("C/users/pk/desktop/pk.txt"); // pk.txt
let basename_V2 = path.basename("C/users/pk/desktop/pk.txt", ".txt"); // pk
console.log(basename_V2);

/* path.dirname(path) */
// .dirname() ---> return the directory path
// syntax: path.dirname(path)
let dirname = path.dirname("C/users/pk/desktop/pk.txt");
console.log(dirname); // C/users/pk/desktop ---> return the directory

/* path.extname(path) */
// .extname() --> extension of file
// syntax: path.extname(path)
let extname = path.extname("C/users/pk/desktop/pk.txt");
console.log(extname); // .txt

/* path.isAbsolute(path) */
// .isAbsolute() ---> Checks if the given path is an absolute path.
// syntax: path.isAbsoulte(path)
let isAbsolute = path.isAbsolute("/users/pk/desktop/pk.txt"); // true
let isAbsolute_V2 = path.isAbsolute("users/pk/desktop/pk.txt"); // false
console.log(isAbsolute_V2);

/* path.relative(path[, ext]) */
// .relative() --> method calculates the relative path from one directory
// syntax: path.relative(from, to)
let relative = path.relative("C/users/pk/", "C/users/pk/desktop/pk.txt"); // desktop\pk.txt
console.log("relative", relative);

/* path.parse(path) */
// .parse() ---> return a path object will all details
// syntax: path.parse(path)
let parse = path.parse("/users/pk/desktop/pk.txt");
console.log(parse); // { root: '/', dir: '/user/pk/desktop', base: 'pk.txt', ext: '.txt', name: 'pk' }

/* path.format(pathObject) */
// .format() ---> take a path object and return a full path
// syntax: path.format(pathObj)
const pathObj = {
  root: "/",
  dir: "/user/pk/desktop",
  base: "pk.txt",
  ext: ".txt",
  name: "pk",
};
let format = path.format(pathObj);
console.log(format); // /user/pk/desktop\pk.txt
