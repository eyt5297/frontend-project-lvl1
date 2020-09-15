import { playGame, getRandom } from '../src/index.js';

const findGcd = (a, b) => {
  if (a === b) {
    return a;
  }
  const [numberBig, numberSmall] = (a > b) ? [a, b] : [b, a];
  const remainder = numberBig % numberSmall;
  if (remainder === 0) {
    return numberSmall;
  }
  return findGcd(numberSmall, remainder);
};

const roundGcd = () => {
  const maxNumber = 100;
  const numberA = getRandom(maxNumber);
  const numberB = getRandom(maxNumber);

  const trueAnswer = findGcd(numberA, numberB).toString();
  const qustion = `${numberA} ${numberB}`;
  return [qustion, trueAnswer];
};

const calc = () => {
  const questionGame = 'What is the result of the expression?';
  playGame(roundGcd, questionGame);
};

export default calc;
