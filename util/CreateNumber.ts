const randomNumber = () => {
  return String(Math.floor(Math.random() * 10));
};

export const createNumber = () => {
  let result = "";
  for (let i = 0; i < 4; i++) {
    let inputData = randomNumber();

    if (result.includes(inputData)) {
      i--;
      continue;
    }
    result += inputData;
  }
  return result;
};
