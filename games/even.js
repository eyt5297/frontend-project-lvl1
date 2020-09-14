import { playGame, getRandom } from '../src/index.js';

const isEven = (value) => ((value % 2 === 0) ? 'yes' : 'no');

const roundEven = () => {
  const maxNumber = 100;
  const number = getRandom(maxNumber);
  const trueAnswer = isEven(number);
  return [number, trueAnswer];
};

const even = () => {
  const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(roundEven, questionGame);
};

export default even;
