import readlineSync from 'readline-sync';

const getName = () => {
    let name = readlineSync.question('May I have your name? ');
    return name;
}

const greetings = (name) => {
    console.log(`Hello, ${name}!`);
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