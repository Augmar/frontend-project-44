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

const gameInit = (nameOfGame) => {
    let arr = [];
    if (nameOfGame === "calc") {
        let a = getRandomInt(1, 50);
        let b = getRandomInt(1, 50);
        let s = getRandomSign(['-','+','*']);
        arr.push(a);
        arr.push(b);
        arr.push(s);
        console.log(`What is the result of the expression?\nQuestion: ${a} ${s} ${b}`)
    } else if (nameOfGame === "even") {
        let a = getRandomInt(1, 100);
        console.log(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${a}`);
        let arr = [];
        arr.push(a);
    } else if (nameOfGame === "gcd") {
        let a = getRandomInt(1, 100);
        let b = getRandomInt(1, 100);
        console.log(`Find the greatest common divisor of given numbers.\nQuestion: ${a} ${b}`)
        arr.push(a);
        arr.push(b);
    }
    return arr;
}

const gamePlay = (nameOfGame) => {
    let count = 0;
    console.log("Welcome to the Brain Games!");

    const name = getName();

    greetings(name);

    while (true) {
        let arr = gameInit(nameOfGame);
        let rightAnswer = String(getRightAnswer(nameOfGame, arr[0], arr[1], arr[2]));
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