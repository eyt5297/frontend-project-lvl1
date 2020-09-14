import readlineSync from 'readline-sync';

const sayHello = () => {
  const name = readlineSync.question('May I hame your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const isEven = (value) => ((value % 2 === 0) ? 'yes' : 'no');
const getRandom = (max) => (Math.floor(Math.random() * Math.floor(max)));

const askAndAnswer = (count = 0) => {
  if (count === 3) {
    return true;
  }

  const maxNumber = 100;
  const number = getRandom(maxNumber);
  const trueAnswer = isEven(number);

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (trueAnswer === userAnswer) {
    console.log('Correct!');
    return askAndAnswer(count + 1);
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
  return false;
};

const testEven = () => {
  console.log('Welcom to the Brain Games!');
  const name = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const resultGame = askAndAnswer();
  if (resultGame) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  console.log(`Let's try again, ${name}!`);
};

export default testEven;
