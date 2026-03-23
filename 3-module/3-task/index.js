function camelize(str) {
  return str.split('-').map((part, index) => {
    if (index === 0) {
      return part;
    }

    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join('');
}
