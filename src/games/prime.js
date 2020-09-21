import playGame from '../index.js';
import { getRandom } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  let d = 3;
  while ((d * d < n) && (n % d !== 0)) {
    d += 2;
  }
  return d * d > n;
};

const generateRoundData = () => {
  const number = getRandom(0, 25);

  const qustion = number.toString();
  const answer = isPrime(number) ? 'yes' : 'no';
  return [qustion, answer];
};

export default () => playGame(generateRoundData, description);
