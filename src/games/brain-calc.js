import { getRandomIntNumber } from '../random.js';

export const gameDescription = 'What is the result of the expression?';

export const getGameSet = () => {
  const gameSet = {};

  const operations = ['+', '-', '*'];
  const operand1 = getRandomIntNumber(0, 100);
  const operand2 = getRandomIntNumber(0, 100);
  const operator = operations[getRandomIntNumber(0, 3)];
  let expression = '';
  expression += String(operand1);
  expression += ` ${operator} `;
  expression += String(operand2);
  gameSet.question = String(expression);

  let result = (() => {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
    }
  })();
  gameSet.answer = String(result);

  return gameSet;
};