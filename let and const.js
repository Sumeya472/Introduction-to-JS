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
const PI = Math.PI;

function calculateCircleProperties(r) {
    const area = PI * Math.pow(r, 2);
    const perimeter = 2 * PI * r;
    return { area, perimeter };
}
function main() {
    const r = parseFloat(readLine());
    
    if (r <= 0 || r > 100) {
        throw new Error("constraint violation: 0 < r <= 100");
    }
    const { area, perimeter } = calculateCircleProperties(r);
    console.log(area);
    console.log(perimeter);
    

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
