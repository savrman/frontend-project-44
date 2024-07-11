import getRandomIntNumber from '../random.js';

const getProgression = () => {
  const MIN_PROGRESSION_SIZE = 5;
  const MAX_PROGRESSION_SIZE = 10;
  const MIN_PROGRESSION_NUMBER = 0;
  const MAX_PROGRESSION_NUMBER = 100;
  const MIN_DIFFERENCE = 10;
  const MAX_DIFFERENCE = 100;

  const progressionNumbers = [];
  const progressionSize = getRandomIntNumber(MIN_PROGRESSION_SIZE, MAX_PROGRESSION_SIZE);
  const firstElement = getRandomIntNumber(MIN_PROGRESSION_NUMBER, MAX_PROGRESSION_NUMBER);
  const difference = getRandomIntNumber(MIN_DIFFERENCE, MAX_DIFFERENCE);
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
