import playGame from '../index.js';
import { getRandom } from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (progressionLength, firstNumber, step) => {
  let curent = firstNumber;
  const result = [];

  for (let i = 0; i < progressionLength; i += 1) {
    result.push(curent.toString());
    curent += step;
  }

  return result;
};

const generateRoundData = () => {
  const step = getRandom(0, 20);
  const firstNumber = getRandom(0, 20);
  const progressionLength = 10;
  const progression = generateProgression(progressionLength, firstNumber, step);
  const hiddenNumberIndex = getRandom(0, progressionLength - 1);

  const answer = progression[hiddenNumberIndex];
  progression[hiddenNumberIndex] = '..';
  const qustion = progression.join(' ');
  return [qustion, answer];
};

export default () => playGame(generateRoundData, description);
