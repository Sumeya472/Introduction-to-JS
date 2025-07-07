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

function getLetter(s) {
    if (s.length < 1 || s.length > 100) {
        throw new Error("constraint violation: 1 <= s.length <= 100");
    }
    const firstChar = s.charAt(0).toLowerCase();
    if (['a', 'e', 'i', 'o', 'u'].includes(firstChar)) {
        return 'A';
    }
    else if (['b', 'c', 'd', 'f','g'].includes(firstChar)) {
        return 'B';
    }
    else if (['h', 'j', 'k', 'l','m'].includes(firstChar)) {
        return 'C';
    }
    else {
    return 'D';
}
}
function main() {
     const s = readLine();
     const result = getLetter(s);
     console.log(result);
}

