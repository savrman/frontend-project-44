import getRandomIntNumber from '../random.js';

const isEven = (num) => !(num % 2);
const MIN_RANDOM_NUMBER = 0;
const MAX_RANDOM_NUMBER = 100;

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getGameSet = () => {
  const gameSet = {};

  const number = getRandomIntNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  gameSet.question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  gameSet.answer = String(answer);

  return gameSet;
};
