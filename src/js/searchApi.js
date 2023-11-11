import { getPhotoQuery } from "./fetchFn";
import { createMarcup } from "./createMarcup";

const formEl = document.querySelector('.js-form');
// const btnEl = document.querySelector('.js-form__btn');
const listEl = document.querySelector('.js-list');
const btnLoadMore = document.querySelector('.js-load-more');

let inputValue = '';
let page = 1;

formEl.addEventListener('submit', onSearchBySubmit);

function onSearchBySubmit (e) {
  e.preventDefault();
  inputValue = e.target.elements.search.value;

  if (inputValue === '') {
    return;
  }

  btnLoadMore.classList.remove('is-hidden');

  getPhotoQuery(inputValue, page).then(data => {
    listEl.innerHTML = createMarcup(data.hits);
  });

}

btnLoadMore.addEventListener('click', onLoadMore);

function onLoadMore (e) {
  page += 1;
  getPhotoQuery(inputValue, page)
    .then(({ hits }) => {
      listEl.insertAdjacentHTML('beforeend', createMarcup(hits));
    });
}