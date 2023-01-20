#!/usr/bin/env node

import { getName, greetings, getAnswer, isAnswerCorrect, winMessage, loseMessage } from './communication.js';
import { getRandomInt, getRandomSign } from './random.js';

let phrase="Welcome to the Brain Games!";
console.log(phrase);

const name = getName();

greetings(name);

console.log('What is the result of the expression?');
let count = 0;

const getRightAnswer = (a, b, sign) => {
    if (sign === '+') {
        return a + b;
    } else if (sign === '-') {
        return a - b;
    } else if (sign === '*') {
        return a * b;
    } else {
        console.log(`Should never work ${sign}`)
        return sign;
    }
}

while (true) {
    let a = getRandomInt(1, 10);
    let b = getRandomInt(1, 10);
    let sign = getRandomSign(['-','+','*']);
    let rightAnswer = getRightAnswer(a, b, sign);
    console.log(`Question: ${a} ${sign} ${b}`)
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