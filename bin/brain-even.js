#!/usr/bin/env node

import { getName, greetings, getAnswer, isAnswerCorrect, winMessage, loseMessage } from './communication.js';

let phrase="Welcome to the Brain Games!";
console.log(phrase);

const name = getName();

greetings(name);

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const isNumEven = (num) => {
    return num%2 === 0;
}

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let count = 0;

while (true) {
    let num = getRandomInt(1, 100);
    console.log(`Question: ${num}`);
    let rightAnswer = '';
    if (isNumEven(num)) {
        rightAnswer = 'yes';
    } else {
        rightAnswer = 'no';
    }
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