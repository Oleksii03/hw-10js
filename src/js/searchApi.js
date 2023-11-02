import { getPhotoQuery } from "./fetchFn";
import { createMarcup } from "./createMarcup";

const formEl = document.querySelector('.js-form');
const btnEl = document.querySelector('.js-form__btn');
const listEl = document.querySelector('.js-list');


formEl.addEventListener('submit', onSearchByQuery);

function onSearchByQuery (e) {
  e.preventDefault();
  const inputValue = e.target.elements.search.value;

  getPhotoQuery(inputValue).then(data => {
    listEl.innerHTML = createMarcup(data.hits);
  });

}


