import playGame from '../index.js';
import { getRandom } from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (operator, numberA, numberB) => {
  switch (operator) {
    case '+':
      return numberA + numberB;
    case '-':
      return numberA - numberB;
    case '*':
      return numberA * numberB;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const roundCalc = () => {
  const operators = '+-*';
  const numberA = getRandom(0, 99);
  const numberB = getRandom(0, 99);
  const operator = operators[getRandom(0, operators.length - 1)];

  const question = `${numberA} ${operator} ${numberB}`;
  const answer = calculate(operator, numberA, numberB).toString();

  return [question, answer];
};

const calc = () => {
  playGame(roundCalc, description);
};

export default calc;
