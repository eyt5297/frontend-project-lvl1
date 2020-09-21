import playGame from '../index.js';
import { getRandom } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (value) => (value % 2 === 0);

const generateRoundData = () => {
  const number = getRandom(0, 99);

  const question = number.toString();
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(generateRoundData, description);
