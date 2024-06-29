import { getRandomIntNumber } from '../random.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

export const getGameSet = () => {
  const gameSet = {};

  const number1 = getRandomIntNumber(1, 101);
  const number2 = getRandomIntNumber(1, 101);
  gameSet.question = `${number1} ${number2}`;

  const gcd = ((num1, num2) => {
    const numAbs1 = Math.abs(num1);
    const numAbs2 = Math.abs(num2);
    let greaterDivider = (numAbs1 >= numAbs2) ? numAbs1 : numAbs2;
    let smallerDivider = (numAbs1 <= numAbs2) ? numAbs1 : numAbs2;

    while (true) {
      const remainder = greaterDivider % smallerDivider;
      if (remainder === 0) {
        return smallerDivider;
      }
      greaterDivider = smallerDivider;
      smallerDivider = remainder;
    }
  })(number1, number2);
  gameSet.answer = String(gcd);

  return gameSet;
};
