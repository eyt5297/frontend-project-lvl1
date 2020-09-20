import { playGame, getRandom } from '../index.js';

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
  const numberA = getRandom(0, 100);
  const numberB = getRandom(100);
  const indexOperator = operators(getRandom(2));

  const answer = calculate(operator, numberA, numberB);
  const question = `${numberA} ${operations[numberOper].symbol} ${numberB}`;
  return [question, answer];
};

const calc = () => {
  playGame(roundCalc, description);
};

export default calc;
