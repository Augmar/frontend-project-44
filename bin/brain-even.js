#!/usr/bin/env node

import { getName, greetings, getAnswer, isAnswerCorrect, winMessage, loseMessage } from './communication.js';
import { getRandomInt } from './random.js';
import { getRightAnswer } from './getRightAnswer.js';

let phrase="Welcome to the Brain Games!";
console.log(phrase);

const name = getName();

greetings(name);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let count = 0;

while (true) {
    let num = getRandomInt(1, 100);
    console.log(`Question: ${num}`);
    let rightAnswer = getRightAnswer('even', num)
    let answer = getAnswer();
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