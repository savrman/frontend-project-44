import { getRandomIntNumber } from '../random.js';

export const gameDescription = 'What number is missing in the progression?';

export const getGameSet = () => {
  const gameSet = {};

  const progressionNumbers = [];
  const progressionSize = getRandomIntNumber(5, 11);
  const hiddenElementIndex = getRandomIntNumber(0, progressionSize);
  const firstElement = getRandomIntNumber(0, 101);
  const difference = getRandomIntNumber(0, 101);
  progressionNumbers.push(firstElement);
  for (let i = 1; i < progressionSize; i += 1) {
    progressionNumbers.push(progressionNumbers.at(-1) + difference);
  }
  const progressionHiddenNumbers = progressionNumbers.map((item, index) => {
    const result = (index === hiddenElementIndex) ? '..' : item;
    return result;
  });
  gameSet.question = progressionHiddenNumbers.join(' ');
  gameSet.answer = String(progressionNumbers[hiddenElementIndex]);

  return gameSet;
};
