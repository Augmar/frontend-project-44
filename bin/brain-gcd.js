#!/usr/bin/env node

import { getName, greetings, getAnswer, isAnswerCorrect, winMessage, loseMessage } from './communication.js';
import { getRandomInt } from './random.js';
import { getRightAnswer } from './getRightAnswer.js';

let phrase="Welcome to the Brain Games!";
console.log(phrase);

const name = getName();

greetings(name);

console.log('What is the result of the expression?');
let count = 0;

while (true) {
    let a = getRandomInt(1, 100);
    let b = getRandomInt(1, 100);
    let rightAnswer = getRightAnswer('gcd', a, b);
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