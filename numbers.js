export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error("empty input");
  }
}

export function validateNumber(number) {
  if (isNaN(number)) {
    throw new Error("invalid number input");
  }
}

function transfarToNumber(value) {
  return +value;
}

export function cleanNumbers(cleanNumbers) {
  let numbers = [];

  for (const numberInput of cleanNumbers) {
    validateStringNotEmpty(numberInput);
    const number = transfarToNumber(numberInput);
    numbers.push(number);
  }
  return numbers;
}
