import getRandomIntNumber from '../random.js';

const operations = ['+', '-', '*'];
const operatorMap = {
  '+': (operand1, operand2) => operand1 + operand2,
  '-': (operand1, operand2) => operand1 - operand2,
  '*': (operand1, operand2) => operand1 * operand2,
};
const MIN_RANDOM_NUMBER = 0;
const MAX_RANDOM_NUMBER = 100;

export const gameDescription = 'What is the result of the expression?';

export const getGameSet = () => {
  const operand1 = getRandomIntNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const operand2 = getRandomIntNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const operator = operations[getRandomIntNumber(0, operations.length - 1)];
  const gameSet = {};
  const expression = `${operand1} ${operator} ${operand2}`;
  gameSet.question = expression;
  const result = operatorMap[operator](operand1, operand2);
  gameSet.answer = String(result);

  return gameSet;
};
