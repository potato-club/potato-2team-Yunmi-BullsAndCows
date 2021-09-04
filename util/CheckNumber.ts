export const CheckNumber = (resultNumber: string, value: string) => {
  let st = 0;
  let b = 0;
  let out = 4;
  for (let i = 0; i < 4; ++i) {
    for (let j = 0; j < 4; ++j) {
      if (resultNumber[i] === value[j]) {
        if (i === j) {
          st += 1;
          out -= 1;
        } else {
          b += 1;
          out -= 1;
        }
      }
    }
  }
  return { st, b, out };
};
