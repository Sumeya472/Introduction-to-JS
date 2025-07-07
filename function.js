'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function factorial(n) {
    if (n < 1 || n > 10) {
        throw new Error("constraint violation: 1<= n <=10");
    }
    if (n === 0 || n === 1) {
        return 1;
}
    return n * factorial(n - 1);
}
function main() {
    const n = parseInt(readLine().trim(), 10);
    const result = factorial(n);
    console.log(result);
}
