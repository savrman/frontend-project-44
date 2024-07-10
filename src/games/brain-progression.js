import getRandomIntNumber from '../random.js';

const getProgression = () => {
  const progressionNumbers = [];
  const progressionSize = getRandomIntNumber(5, 11);
  const firstElement = getRandomIntNumber(0, 101);
  const difference = getRandomIntNumber(0, 101);
  progressionNumbers.push(firstElement);
  for (let i = 1; i < progressionSize; i += 1) {
    progressionNumbers.push(progressionNumbers.at(-1) + difference);
  }
  return progressionNumbers;
};
export const gameDescription = 'What number is missing in the progression?';

export const getGameSet = () => {
  const gameSet = {};

  const progression = getProgression();
  const hiddenElementIndex = getRandomIntNumber(0, progression.length - 1);
  gameSet.answer = String(progression[hiddenElementIndex]);
  progression[hiddenElementIndex] = '..';
  gameSet.question = progression.join(' ');

  return gameSet;
};
