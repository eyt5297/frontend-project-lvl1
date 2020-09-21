/* eslint-disable import/prefer-default-export */

export const getRandom = (min, max) => {
  const result = min + Math.floor(Math.random() * Math.floor(max + 1));
  return result;
};
