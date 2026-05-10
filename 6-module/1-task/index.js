/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.render();
    this.initEventListeners();
  }

  render() {
    this.elem = document.createElement('div');

    this.elem.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${this.getTableRows()}
        </tbody>
      </table>
    `;
  }

  getTableRows() {
    return this.rows.map(row => `
      <tr>
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.salary}</td>
        <td>${row.city}</td>
        <td>
          <button>X</button>
        </td>
      </tr>
    `).join('');
  }

  initEventListeners() {
    this.elem.addEventListener('click', (e) => {
      const btn = e.target.closest('button');

      if (!btn) {
        return;
      }

      btn.closest('tr').remove();
    });
  }
}
