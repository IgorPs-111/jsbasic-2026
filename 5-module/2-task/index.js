function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const text = document.getElementById('text');

  btn.addEventListener('click', (e) => {
    if (text.hasAttribute('hidden')) {
      text.removeAttribute('hidden');

    } else {
      text.setAttribute('hidden', '');
    }
  });
}
