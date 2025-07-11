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

function getGrade(score) {
    if (score < 0 || score > 30) {
        throw new Error("constraint violation: 0 <= score <= 30");
    }
    if (score >= 25) return 'A';
    if (score >= 20) return 'B';
    if (score >= 15) return 'C';
    if (score >= 10) return 'D';
    if (score >= 5) return 'E';
    
    return 'F';
}
function main() {
    const score = parseInt(readLine());
    const grade = getGrade(score);
    console.log(grade);
}

