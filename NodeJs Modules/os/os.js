import os from "os";

/* os.arch() */
// syntax: os.arch() ---> returns a string indicating the architecture of the OS CPU
let arch = os.arch();
console.log("arch-->", arch); // x64 (or 'arm', etc.)

/* .cpus() */
// syntax: os.cpus() ---> returns an array of objects containing info about each logical CPU core in the system
let cpus = os.cpus();
console.log("cpus-->", cpus); //  Array of objects containing CPU information

/* .freemem() */
// syntax: os.freemem() ---> returns the amount of free system memory in bytes
let freemem = os.freemem();
console.log("freemem-->", freemem); //  Free memory in bytes

/* .totalmem() */
// syntax: os.totalmem() ---> returns the total system memory in bytes
let totalmem = os.totalmem();
console.log("totalmem-->", totalmem); //  total memory in bytes

/* .loadavg() */
// syntax: os.loadavg() ---> returns an array with the system load averages for the past 1, 5, and 15 minutes.
let loadavg = os.loadavg();
console.log("loadavg-->", loadavg); // Output: [0.12, 0.21, 0.15] OR [0,0,0]

/* .networkInterfaces() */
// syntax: os.networkInterfaces() ---> returns an object containing information about the network interfaces
let networkInterfaces = os.networkInterfaces();
console.log("networkInterfaces-->", networkInterfaces); // An object with network interface details

/* .platform() */
// syntax: os.platform() ---> returns a string indicating the operating system platform.
let platform = os.platform();
console.log("platform-->", platform); // Output: 'linux', 'darwin', 'win32', etc.

/* .release() */
// syntax: os.release() ---> returns a string containing the operating system's release version.
let release = os.release();
console.log("release-->", release); // '5.4.0-1045-aws' (or version corresponding to the OS)

/* .tmpdir() */
// syntax: os.tmpdir() ---> returns the default directory for temporary files in the system.
let tmpdir = os.tmpdir();
console.log("tmpdir-->", tmpdir); // 'C:\\Users\\<Username>\\AppData\\Local\\Temp' (Windows)

/* .type() */
// syntax: os.type() ---> returns a string identifying the operating system name.
let type = os.type();
console.log("type-->", type); // 'Linux', 'Darwin', 'Windows_NT', etc.

/* .uptime() */
// syntax: os.uptime() ---> returns the system uptime in seconds, representing the time since the last reboot.
let uptime = os.uptime();
console.log("uptime-->", uptime); // System uptime in seconds (e.g., 12345).

/* .homedir() */
// syntax: os.homedir() ---> returns the home directory of the current user.
let homedir = os.homedir();
console.log("homedir-->", homedir); //  '/home/username' (Linux) or 'C:\\Users\\Username' (Windows)
