export function createMarcup (val) {
  return val.map((el, i) => {
    return `
      <li class='list__item' data-large-image="${el.largeImageURL}">
        <a href="#">
          <img loading="lazy" height="400" src="${el.webformatURL}" alt="${i}">
        </a>  
      </li>`;
  }).join('');
}