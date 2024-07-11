import getRandomIntNumber from '../random.js';

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 101;

export const gameDescription = 'Find the greatest common divisor of given numbers.';

export const getGameSet = () => {
  const gameSet = {};

  const number1 = getRandomIntNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const number2 = getRandomIntNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  gameSet.question = `${number1} ${number2}`;
  gameSet.answer = String(gcd(number1, number2));

  return gameSet;
};
