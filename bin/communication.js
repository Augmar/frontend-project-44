import readlineSync from 'readline-sync';

const getName = () => {
    let name = readlineSync.question('May I have your name? ');
    return name;
}

const greetings = (name, nameOfGame) => {
    let phrase = '';
    if (nameOfGame === 'calc') {
        phrase = 'What is the result of the expression?'
    } else if (nameOfGame === 'even') {
        phrase = 'Answer "yes" if the number is even, otherwise answer "no".'
    } else if (nameOfGame === 'gcd') {
        phrase = 'Find the greatest common divisor of given numbers.'
    } else if (nameOfGame === 'gcd') {
        phrase = 'What number is missing in the progression?'
    }
    console.log(`Hello, ${name}!\n${phrase}`);
}

const getAnswer = () => {
    return readlineSync.question('Your answer: ');
}

const isAnswerCorrect = (answer, correctAnswer) => {
    return answer === correctAnswer;
}

const winMessage = (name) => {
    console.log(`Congratulations, ${name}!`);
}

const loseMessage = (name, answer, rightAnswer) => {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${name}!`)
}

export { getName, greetings, getAnswer, isAnswerCorrect, winMessage, loseMessage }