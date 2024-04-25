console.log(process);

// argv
// Useful for creating Command Line Interfaces
console.log(process.argv);

// process.env
console.log(process.env.LOGNAME);

// pid
console.log(process.pid);

// cwd()
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// uptime() - time from when we run the program till it executes
console.log(process.uptime());

// on()
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

// exit(): 0 - Success; 1 - General Error
process.exit(0);

console.log(Hello);