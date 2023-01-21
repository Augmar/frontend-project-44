import { isAnswerCorrect, winMessage, loseMessage, getAnswer, getName, greetings } from "./communication.js";
import { getRandomInt, getRandomSign } from './random.js';

const isNumEven = (num) => {
    return num%2 === 0;
}

const answerForEven = (num) => {
    if (isNumEven(num)) {
        return 'yes';
    } else {
        return 'no';
    }
}

const answerForCalc = (a, b, s) => {
    if (s === '+') {
        return a + b;
    } else if (s === '-') {
        return a - b;
    } else if (s === '*') {
        return a * b;
    } else {
        console.log(`Should never work ${s}`)
        return s;
    }
}

const answerForGCD = (a, b) => {
    while (b) {
        if (a === 0) {
            return b;
        } else if (a > b) {
            a = a - b;
        } else if (a <= b) {
            b = b - a;
        }
    }
    return a;
}

const getRightAnswer = (nameOfGame, a = 0, b = 0, s = '') => {
    if (nameOfGame === 'even') {
        return answerForEven(a);
    } else if (nameOfGame === 'calc') {
        return answerForCalc(a, b, s);
    } else if (nameOfGame === 'gcd') {
        return answerForGCD(a, b);
    }
}

const gamePlay = (nameOfGame) => {
    let count = 0;
    let phrase="Welcome to the Brain Games!";
    console.log(phrase);

    const name = getName();

    greetings(name);

    console.log('What is the result of the expression?');
    if (nameOfGame === "calc") {
        while (true) {
            let a = getRandomInt(1, 10);
            let b = getRandomInt(1, 10);
            let s = getRandomSign(['-','+','*']);
            let rightAnswer = getRightAnswer('calc', a, b, s);
            console.log(`Question: ${a} ${s} ${b}`)
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
    }
}

export { getRightAnswer, gamePlay }