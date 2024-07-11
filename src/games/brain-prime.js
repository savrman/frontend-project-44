import getRandomIntNumber from '../random.js';

const isPrime = (number) => {
  // Simple cases
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  if (number > 2 && number <= 9) {
    const primeNumbers = [3, 5, 7];
    return primeNumbers.includes(number);
  }

  // More about: https://stepik.org/media/attachments/course/4603/module2__1_.pdf
  const greatestDiv = Math.sqrt(number);
  for (let div = 3; div < greatestDiv; div += 2) {
    if (number % div === 0) {
      return false;
    }
  }
  return true;
};
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 1000;

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getGameSet = () => {
  const gameSet = {};

  const number = getRandomIntNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  gameSet.question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  gameSet.answer = String(answer);

  return gameSet;
};
