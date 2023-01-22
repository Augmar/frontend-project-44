import { isAnswerCorrect, winMessage, loseMessage, getAnswer, getName, greetings } from "./communication.js";
import { getRandomInt, getRandomSign, getRandomProgression } from './random.js';

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

const answerForProgression = (progression) => {
    let x = progression[progression.length - 1];

    return progression[x];
}

const getRightAnswer = (nameOfGame, arr) => {
    if (nameOfGame === 'even') {
        return answerForEven(arr[0]);
    } else if (nameOfGame === 'calc') {
        return answerForCalc(arr[0], arr[1], arr[2]);
    } else if (nameOfGame === 'gcd') {
        return answerForGCD(arr[0], arr[1]);
    } else if (nameOfGame === 'progression') {
        return answerForProgression(arr);
    } 
}

const printProgression = (progression, x) => {
    let progrForPrint = [];
        for (let i = 0; i < progression.length - 1; i++) {
            if (i === x) {
                progrForPrint.push('..')
            } else {
                progrForPrint.push(progression[i])
            }
        }
    console.log(`Question: ${progrForPrint.join(' ')}`)
}

const initCalc = () => {
    let a = getRandomInt(1, 50);
    let b = getRandomInt(1, 50);
    let s = getRandomSign(['-','+','*']);
    let arr = [a,b,s];
    console.log(`Question: ${a} ${s} ${b}`)
    
    return arr;
}

const initEven = () => {
    let a = getRandomInt(1, 100);
    console.log(`Question: ${a}`);
    let arr = [];
    arr.push(a);

    return arr;
}

const initGCD = () => {
    let a = getRandomInt(1, 100);
    let b = getRandomInt(1, 100);
    console.log(`Question: ${a} ${b}`)
    let arr = [a, b];

    return arr;
}

const initProgression = () => {
    let progressionLength = getRandomInt(5, 15);
    arr = getRandomProgression(progressionLength);
    let x = getRandomInt(1, progressionLength);
    let arr = [];
    arr = x;
    printProgression(arr, x);

    return arr;
}

const gameInit = (nameOfGame) => {
    let arr = [];
    if (nameOfGame === "calc") {
        arr = initCalc();
    } else if (nameOfGame === "even") {
        arr = initEven();
    } else if (nameOfGame === "gcd") {
        arr = initGCD();
    } else if (nameOfGame === 'progression') {
        arr = initProgression();
    }
    return arr;
}

const gamePlay = (nameOfGame) => {
    let count = 0;
    console.log("Welcome to the Brain Games!");

    const name = getName();

    greetings(name, nameOfGame);

    while (count !== 3) {
        let arr = [];
        arr = gameInit(nameOfGame);
        let rightAnswer = String(getRightAnswer(nameOfGame, arr));
        let answer = getAnswer();
        if (isAnswerCorrect(answer, rightAnswer)) {
            console.log('Correct!');
            count++;
        }else {
            loseMessage(name, answer, rightAnswer);
            break;
        }

    }

    if (count === 3) {
        winMessage(name);
    }
}

export { getRightAnswer, gamePlay }