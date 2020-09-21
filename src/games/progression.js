import playGame from '../index.js';
import { getRandom } from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (maxProgression, numberFirst, diffAP) => {
  let addValue = numberFirst;
  const result = [];

  for (let i = 0; i < maxProgression; i += 1) {
    result.push(addValue.toString());
    addValue += diffAP;
  }

  return result;
};

const generateRoundData = () => {
  const diffAP = getRandom(0, 20);
  const numberFirst = getRandom(0, 20);
  const maxProgression = 10;
  const progress = getProgression(maxProgression, numberFirst, diffAP);
  const missPos = getRandom(0, maxProgression - 1);

  const answer = progress[missPos];
  progress[missPos] = '..';
  const qustion = progress.join(' ');
  return [qustion, answer];
};

export default () => playGame(generateRoundData, description);
