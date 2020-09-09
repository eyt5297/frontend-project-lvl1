import readlineSync from 'readline-sync';

export const sayHello = () => {
  const name = readlineSync.question('May I hame your name?');
  console.log(`Hello, ${name}`);
}
