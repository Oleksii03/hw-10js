export function createMarcup (val) {
  return val.map((el, i) => {
    return `
    <a href="#">
      <li class='list__item'>
        <img src="${el.webformatURL}" alt="${i}">
      </li>
    </a>`;
  }).join('');
}