/*
// Объект для отладки в консоли браузера

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};
*/

function sumSalary(salaries) {
  let result = 0;

  for (let salary in salaries) {
    const value = salaries[salary];

    if (Number.isFinite(value)) {
      result += value;
    }
  }

  return result;
}
