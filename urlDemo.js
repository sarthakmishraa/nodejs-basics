import url, { fileURLToPath } from 'url';

const urlString = "https://www.google.com/search?q=hello+world";

// URL object - returns an object with information about the URL
const urlObj = new URL(urlString);
console.log(urlObj);
// console.log(urlObj.pathname);
// console.log(urlObj.protocol);

// format() - returns the url in string
console.log(url.format(urlObj));

// import.meta.url - file URL
console.log(import.meta.url);

// fileURLToPath()
console.log(fileURLToPath(import.meta.url));

// URLSearchParams - gives search params
const params = new URLSearchParams(urlObj.search);
console.log(params.get('q'));

params.append('limit', '5');
console.log(params);
params.delete('limit', '5');
console.log(params);