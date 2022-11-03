const readline = require('linebyline');
const fs = require('fs');
const rl = readline('./file.txt');



const array = fs.readFileSync('file.txt').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}