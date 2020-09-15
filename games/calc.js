import { playGame, getRandom } from '../src/index.js';

const roundCalc = () => {
  const operations = [
    { symbol: '+', func: (a, b) => a + b },
    { symbol: '-', func: (a, b) => a - b },
    { symbol: '*', func: (a, b) => a * b },
  ];
  const maxNumber = 100;
  const maxOperation = 3;
  const numberA = getRandom(maxNumber);
  const numberB = getRandom(maxNumber);
  const numberOper = getRandom(maxOperation);

  const trueAnswer = operations[numberOper].func(numberA, numberB).toString();
  const expStr = `${numberA} ${operations[numberOper].symbol} ${numberB}`;
  return [expStr, trueAnswer];
};

const calc = () => {
  const questionGame = 'What is the result of the expression?';
  playGame(roundCalc, questionGame);
};

export default calc;
