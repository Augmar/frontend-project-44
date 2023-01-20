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

export { getRightAnswer }