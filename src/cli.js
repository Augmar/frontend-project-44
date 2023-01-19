import readlineSync from 'readline-sync';

console.log('getName');

const getName = () => {
    let name = readlineSync.question('May I have your name? ');
    return name;
}

const greetings = () => {
    let name = getName();
    console.log(`Hello, ${name}!`);
}

export { greetings };