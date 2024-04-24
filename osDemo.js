import os from 'os';

// userInfo() - returns an object with user information (username, uid, gid, homedir, shell)
console.log(os.userInfo());

// totalmem() - Total memory in bytes
console.log(os.totalmem());

// freemem() - Free memory in bytes
console.log(os.freemem());

// cpus() - returns an array with object of every core
console.log(os.cpus());