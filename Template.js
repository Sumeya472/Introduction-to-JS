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


function sides(literals, ...expressions) {
    const [A, P] = expressions;
    const root = Math.sqrt(P**2 - 16*A);
    const s1 = (P + root) / 4;
    const s2 = (P - root) / 4;
    return [s1, s2].sort((a, b) => a - b);
    }
function main(){
    let s1 = +(readLine());
    let s2 = +(readLine());
    [s1, s2] = [s1. s2].sort();
    console.log([s1, s2]);
}
