import readlineSync from 'readline-sync';

const ANSWERS_TO_WIN = 3;
const playGame = (gameDescription, getGameSet) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(gameDescription);

  let playedGamesNum = 0;
  while (playedGamesNum < ANSWERS_TO_WIN) {
    const { question, answer } = getGameSet();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    playedGamesNum += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
