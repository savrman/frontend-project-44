import getRandomIntNumber from '../random.js';

const isEven = (num) => !(num % 2);

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getGameSet = () => {
  const gameSet = {};

  const number = getRandomIntNumber(0, 100);
  gameSet.question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  gameSet.answer = String(answer);

  return gameSet;
};
