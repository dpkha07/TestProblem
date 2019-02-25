/* QUESTION :
    You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

    For example,

    Given an array of [1, 2, 3, 4] and a target  value of 1. The output should be (2, 1), (3, 2) and (4, 3).

    We have three values meeting the condition:
    2-1=1,
    3-2=1 and 4-3=1.
*/


/* SOLUTION :
    I solved the following problem using HackerRank UI.
*/
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

//LOGIC:
function pairs(k, arr) {
    let counter = 0;                                        //set a variable counter and initialize it to 0
    for (let i = 0; i < arr.length; i++) {                  //outer loop
        for (let j = 0; j < arr.length; j++) {              //inner loop
            if ((arr[i] - arr[j]) == k) {                   //compare value of the elemnet in the inner loop element with value of the outer loop element
                counter++;                                  //if equal to the difference, increment the counter
            }
        }
    }
    return counter;                                         //return the result as count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = pairs(k, arr);

    ws.write(result + "\n");

    ws.end();
}
