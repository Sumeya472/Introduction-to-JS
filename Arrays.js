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

function getSecondLargest(nums) {
    const uniqueNums = [...new Set(nums)];
    uniqueNums.sort((a, b) => b - a);
    return uniqueNums[1];
}
function main() {
    const n = parseInt(readLine());
    const nums = readLine().split(' ').map(Number);
    const result = getSecondLargest(nums);
    console.log(result);
}
