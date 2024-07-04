import getRandomIntNumber from '../random.js';

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

export const gameDescription = 'Find the greatest common divisor of given numbers.';

export const getGameSet = () => {
  const gameSet = {};

  const number1 = getRandomIntNumber(1, 101);
  const number2 = getRandomIntNumber(1, 101);
  gameSet.question = `${number1} ${number2}`;
  gameSet.answer = String(gcd(number1, number2));

  return gameSet;
};
