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

function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsChars = [];
    let consonantChars = [];
    
    for (const char of s) {
        if (vowels.includes(char)) {
            vowelsChars.push(char);
        } else {
            consonantChars.push(char);
        }
    }
    for (const vowel of vowelsChars) {
        console.log(vowel);
    }
    for (const consonant of consonantChars) {
        console.log(consonant);
    }
}
