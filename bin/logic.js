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
    let welcome="Welcome to the Brain Games!";
    console.log(welcome);

    const name = getName();

    greetings(name);

    while (true) {
        let a = 1;
        let b = 1;
        let s = '';
        if (nameOfGame === "calc") {
            a = getRandomInt(1, 50);
            b = getRandomInt(1, 50);
            s = getRandomSign(['-','+','*']);
            console.log(`What is the result of the expression?\nQuestion: ${a} ${s} ${b}`)
        } else if (nameOfGame === "even") {
            a = getRandomInt(1, 100);
            console.log(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${a}`);
        } else if (nameOfGame === "gcd") {
            a = getRandomInt(1, 100);
            b = getRandomInt(1, 100);
            console.log(`Find the greatest common divisor of given numbers.\nQuestion: ${a} ${b}`)
        }
        let rightAnswer = String(getRightAnswer(nameOfGame, a, b, s));
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
}

export { getRightAnswer, gamePlay }