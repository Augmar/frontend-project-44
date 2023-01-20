const isNumEven = (num) => {
    return num%2 === 0;
}

const getRightAnswer = (nameOfGame, a = 0, b = 0, sign = '') => {
    if (nameOfGame === 'even') {
        if (isNumEven(a)) {
            return 'yes';
        } else {
            return 'no';
        }
    } else if (nameOfGame === 'calc') {
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
    } else if (nameOfGame === 'gcd') {
        if (a === 0) {
            return b;
        } else if (b === 0) {
            return a;
        }
        
        while (b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
        }
    
        return a;
    }
}

export { getRightAnswer }