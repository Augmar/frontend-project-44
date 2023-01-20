#!/usr/bin/env node

import { getName, greetings, getAnswer, isAnswerCorrect, winMessage, loseMessage } from './communication.js';
import { getRandomInt } from './random.js';

const getGreatestCommonDivisor = (a, b) => {
    if (a === 0) {
        return b;
    } else if (b === 0) {
        return a;
    }
    
    while (b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }

    return a;
}

let phrase="Welcome to the Brain Games!";
console.log(phrase);

const name = getName();

greetings(name);

console.log('What is the result of the expression?');
let count = 0;

while (true) {
    let a = getRandomInt(1, 100);
    let b = getRandomInt(1, 100);
    let rightAnswer = getGreatestCommonDivisor(a, b);
    console.log(`Question: ${a} ${b}`)
    let answer = Number(getAnswer());
    if (isAnswerCorrect(answer, rightAnswer)) {
        console.log('Correct!');
        count++;
        if (count === 3) {
            winMessage(name);
            break;
        }
    } else {
        loseMessage(name, answer, rightAnswer);
        break;
    }
}