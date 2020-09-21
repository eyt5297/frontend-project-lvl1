import playGame from '../index.js';
import { getRandom } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

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

const generateRoundData = () => {
  const numberA = getRandom(0, 99);
  const numberB = getRandom(0, 99);

  const question = `${numberA} ${numberB}`;
  const answer = findGcd(numberA, numberB).toString();
  return [question, answer];
};

export default () => playGame(generateRoundData, description);
