#!/usr/bin/env node

import { getName, greetings, getAnswer, isAnswerCorrect, winMessage, loseMessage } from './communication.js';

let phrase="Welcome to the Brain Games!";
console.log(phrase);

const name = getName();

greetings(name);

