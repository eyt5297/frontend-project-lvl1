import { playGame, getRandom } from '../src/index.js';

const isPrime = (n) => {
  if (n % 2 === 0) {
    return n === 2;
  }
  let d = 3;
  while ((d * d < n) && (n % d !== 0)) {
    d += 2;
  }
  return d * d > n;
};

const roundPrime = () => {
  const maxNumber = 25;
  const number = getRandom(maxNumber);

  const trueAnswer = isPrime(number) ? 'yes' : 'no';
  const qustion = number;
  return [qustion, trueAnswer];
};

const prime = () => {
  const questionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(roundPrime, questionGame);
};

export default prime;
