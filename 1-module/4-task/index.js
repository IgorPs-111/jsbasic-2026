function checkSpam(str) {
  if (typeof str !== "string") {
    return;
  }

  if (str.toLowerCase().includes('1xbet') || str.toLowerCase().includes('xxx')) {
    return true;
  }

  return false;
}
