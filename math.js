export function add(numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum = sum + +number;
  }
  return sum;
}

const returnStringlength = (str) => {
  str.length();
};
