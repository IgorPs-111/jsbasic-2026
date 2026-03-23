function getMinMax(str) {
  const items = str.split(' ');
  const values = [];

  for (const item of items) {
    const num = Number(item);

    if (!Number.isNaN(num)) {
      values.push(num);
    }
  }

  const numbers = {};
  numbers.min = Math.min(...values);
  numbers.max = Math.max(...values);

  return numbers;
}
