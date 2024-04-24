import path, { dirname } from 'path';
import url from 'url';

const filePath = "./dir1/dir2/test.txt";

// basename() - returns last portion of the path
console.log(path.basename(filePath));

// dirname() - returns the directory
console.log(path.dirname(filePath));

// extname() - returns the extension of the file
console.log(path.extname(filePath));

// parse() - returns an object with root, dir, base, ext and name of a filepath
console.log(path.parse(filePath));

// import.meta.url gives this = file:///S:/MERN/NodeJS/nodejs-practice/nodejs-basics/pathDemo.js
console.log(import.meta.url);

const __filename = url.fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

// join()
// we use join because in windows' filepaths '\' is used while in mac '/' is used so join is a much better
// method to use as we just need to pass arguments and it puts the correct delimiter them to a path.
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve() - Resolves the given sequence of paths or path segments into an absolute path.
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);