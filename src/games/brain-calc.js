import getRandomIntNumber from '../random.js';

const operations = ['+', '-', '*'];
const operatorMap = {
  '+': (operand1, operand2) => operand1 + operand2,
  '-': (operand1, operand2) => operand1 - operand2,
  '*': (operand1, operand2) => operand1 * operand2,
};

export const gameDescription = 'What is the result of the expression?';

export const getGameSet = () => {
  const operand1 = getRandomIntNumber(0, 100);
  const operand2 = getRandomIntNumber(0, 100);
  const operator = operations[getRandomIntNumber(0, 3)];
  const gameSet = {};
  const expression = `${operand1} ${operator} ${operand2}`;
  gameSet.question = expression;
  const result = operatorMap[operator](operand1, operand2);
  gameSet.answer = String(result);

  return gameSet;
};
