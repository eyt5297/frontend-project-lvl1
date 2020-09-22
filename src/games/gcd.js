import playGame from '../index.js';
import { getRandom } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

const generateRoundData = () => {
  const numberA = getRandom(0, 99);
  const numberB = getRandom(0, 99);

  const question = `${numberA} ${numberB}`;
  const answer = gcd(numberA, numberB).toString();
  return [question, answer];
};

export default () => playGame(generateRoundData, description);
