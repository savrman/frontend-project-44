import { getRandomIntNumber } from '../random.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getGameSet = () => {
  const gameSet = {};

  const number = getRandomIntNumber(1, 1000);
  gameSet.question = String(number);

  const isNumberPrime = (() => {
    // Simple cases
    if (number <= 1) {
      return false;
    } else if (number === 2) {
      return true;
    } else if (number % 2 === 0) {
      return false;
    } else {
      // https://stepik.org/media/attachments/course/4603/module2__1_.pdf
      const potentialGreatestDivider = Math.sqrt(number);
      const potentialOddDividers = (() => {
        const range = [];
        for (let i = 3; i < potentialGreatestDivider; i += 2) {
          range.push(i);
        }
        return range;
      })();
      for (const potentialDivider of potentialOddDividers) {
        if (number % potentialDivider === 0) {
          return false;
        }
      }
      return true;
    }
  })();
  const answer = isNumberPrime ? 'yes' : 'no';
  gameSet.answer = String(answer);
  
  return gameSet;
};
