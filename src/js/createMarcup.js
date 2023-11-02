
export function createMarcup (val) {
  return val.map((el, i) => {
    console.log(el);
    return `
    <li class='list__item'>
      <img src="${el.previewURL}" alt="${i}">
    </li>`;
  }).join('');
}