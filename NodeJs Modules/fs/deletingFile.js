import fs from "fs";

/*
fs.unlink(path, callback);
  path: The file path to delete.
  callback: A function executed after the deletion, which takes an err parameter to handle errors.
*/

const deletingFile = () => {
  try {
    fs.unlink("./file.txt", (err) => {
      if (err) {
        console.log("Error deleting file:", err);
        return;
      }
      console.log("File deleted successfully.");
    });
  } catch (error) {
    console.log(error);
  }
};

// TODO
// -synchronous.asynchronous file deleting
// -safe check (check the file exits then delete)

deletingFile();
