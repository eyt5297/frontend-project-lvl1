import readlineSync from 'readline-sync';

const sayHello = () => {
  const name = readlineSync.question('May I hame your name?');
  console.log(`Hello, ${name}`);
};

export default sayHello;
