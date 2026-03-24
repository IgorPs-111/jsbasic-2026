function highlight(table) {
  const tableBodyRows = table.tBodies[0].rows;

  for (let row of tableBodyRows) {
    const age = row.cells[1];
    const gender = row.cells[2];
    const status = row.cells[3];

    const dataValue = status.dataset.available;

    if (Number(age.textContent) < 18) {
      row.style.textDecoration = 'line-through';
    }

    if (gender.textContent === 'm') {
      row.classList.add('male');

    } else if (gender.textContent === 'f') {
      row.classList.add('female');
    }

    if (dataValue === 'true') {
      row.classList.add('available');

    } else if (dataValue === 'false') {
      row.classList.add('unavailable');

    } else {
      row.setAttribute('hidden', '');
    }
  }
}
