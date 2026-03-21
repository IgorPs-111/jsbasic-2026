function ucFirst(str) {
  if (typeof str !== 'string' || str === '') {
    return '';
  }

  str = str[0].toUpperCase() + str.slice(1);

  return str;
}
