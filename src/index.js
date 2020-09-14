import readlineSync from 'readline-sync';

const sayHello = () => {
  const name = readlineSync.question('May I hame your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const askAndAnswer = (roundGame, count = 0) => {
  const maxRound = 3;
  if (count === maxRound) {
    return true;
  }
  const [question, trueAnswer] = roundGame();

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (trueAnswer === userAnswer) {
    console.log('Correct!');
    return askAndAnswer(roundGame, count + 1);
  }

  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
  return false;
};

export const getRandom = (max) => (Math.floor(Math.random() * Math.floor(max)));

export const playGame = (roundGame, questionGame) => {
  console.log('Welcom to the Brain Games!');
  const name = sayHello();
  console.log(questionGame);
  const resultGame = askAndAnswer(roundGame);
  if (resultGame) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  console.log(`Let's try again, ${name}!`);
};
