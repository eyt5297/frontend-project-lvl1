/* eslint-disable import/prefer-default-export */

export const getRandom = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};
