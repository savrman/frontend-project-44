import getRandomIntNumber from '../random.js';

const operatorMap = {
  '+': (operand1, operand2) => operand1 + operand2,
  '-': (operand1, operand2) => operand1 - operand2,
  '*': (operand1, operand2) => operand1 * operand2,
};
const operations = ['+', '-', '*'];

export const gameDescription = 'What is the result of the expression?';

export const getGameSet = () => {
  const gameSet = {};

  const operand1 = getRandomIntNumber(0, 100);
  const operand2 = getRandomIntNumber(0, 100);
  const operator = operations[getRandomIntNumber(0, 3)];
  let expression = '';
  expression += String(operand1);
  expression += ` ${operator} `;
  expression += String(operand2);
  gameSet.question = String(expression);

  const result = operatorMap[operator](operand1, operand2);
  gameSet.answer = String(result);

  return gameSet;
};
