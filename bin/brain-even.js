#!/usr/bin/env node
import readlineSync from 'readline-sync';

const playEvenOdd = () => {
  const ANSWERS_TO_WIN = 3;
  const ANSWERS_TO_LOSE = 1;

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswerNum = 0;
  let incorrectAnswerNum = 0;

  do {
    const randomNumber = getRandomNumber(0, 10);
    const isRandomNumberEven = !(randomNumber % 2);
    const correctAnswer = isRandomNumberEven ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer [yes/no]: ').toLowerCase();
    if (answer === correctAnswer) {
      correctAnswerNum += 1;
      console.log('Correct!');
    } else {
      incorrectAnswerNum += 1;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    }
  } while (correctAnswerNum < ANSWERS_TO_WIN && incorrectAnswerNum < ANSWERS_TO_LOSE);

  if (correctAnswerNum === ANSWERS_TO_WIN) {
    console.log('Congratulations!');
  } else if (incorrectAnswerNum === ANSWERS_TO_LOSE) {
    console.log("Let's try again!");
  }
};

playEvenOdd();
