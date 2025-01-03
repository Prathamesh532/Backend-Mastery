import fs from "fs"

//syntax: .watch(path,options,callback)

fs.watch("./file.txt", (event, filename) => {
    console.log(event, filename)
})

/*
filename: It is a string, Buffer, or URL that denotes the name of the file or directory to be watched.
options: It is a string or object that can be used to modify the behavior of the method. It is an optional parameter. It has the following parameters: 
persistent: It is a Boolean value that is used to specify if the process should continue as long as the files are being watched. The default value is true.
recursive: It is a Boolean value that is used to specify if all the subdirectories of the given directory should be watched. The default value is false.
encoding: It is a string that specifies the character encoding that has been used for the filename passed to the listener.
listener: It is a function that is invoked when the file is accessed or modified. It is an optional parameter.
eventType: It is a string that specifies the type of modification that the file underwent.
filename: It is a string or Buffer that specifies the filename on which the event is triggered.
*/