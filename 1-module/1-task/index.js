function factorial(n) {
  let result = 1;
  // let i = 1;
  //
  // while (i <= n) {
  //   result = result * i;
  //   i++;
  // }

  for (let i = 1; i <= n; i++) {
    result = result * i;
    console.log(result);
  }

  console.log(`Result: ${result}`);

  return result;
}
