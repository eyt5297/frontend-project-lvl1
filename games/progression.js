import { playGame, getRandom } from '../src/index.js';

const getProgression = (maxProgression, numberFirst, diffAp) => {
  let addValue = numberFirst;
  const result = [];

  for (let i = 0; i < maxProgression; i += 1) {
    result.push(addValue.toString());
    addValue += diffAp;
  }

  return result;
};

const roundProgression = () => {
  const maxDiffAp = 20;
  const diffAp = getRandom(maxDiffAp) + 1;
  const maxNunberFirst = 20;
  const numberFirst = getRandom(maxNunberFirst);
  const maxProgression = 10;
  const missPos = getRandom(maxProgression);

  const progress = getProgression(maxProgression, numberFirst, diffAp);
  const trueAnswer = progress[missPos];
  progress[missPos] = '..';
  const qustion = progress.join(' ');
  return [qustion, trueAnswer];
};

const progression = () => {
  const questionGame = 'What number is missing in the progression?';
  playGame(roundProgression, questionGame);
};

export default progression;
