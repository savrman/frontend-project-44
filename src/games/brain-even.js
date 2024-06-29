import { getRandomIntNumber } from '../random.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getGameSet = () => {
  const gameSet = {};

  const number = getRandomIntNumber(0, 100);
  gameSet.question = String(number);
  
  const isNumberEven = !(number % 2);
  const answer = isNumberEven ? 'yes' : 'no';
  gameSet.answer = String(answer);
  
  return gameSet;
};