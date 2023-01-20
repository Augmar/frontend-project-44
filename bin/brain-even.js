#!/usr/bin/env node

import readlineSync from 'readline-sync';


let phrase="Welcome to the Brain Games!";
console.log(phrase);

const getName = () => {
    let name = readlineSync.question('May I have your name? ');
    return name;
}

const name = getName();

const greetings = () => {
    console.log(`Hello, ${name}!`);
}

greetings();

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
    let answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
        console.log('Correct!');
        count++;
        if (count === 3) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, Bill!`);
        break;
    }
}