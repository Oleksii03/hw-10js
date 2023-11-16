import { getPhotoQuery } from "./fetchFn";
import { createMarcup } from "./createMarcup";

const formEl = document.querySelector('.js-form');
const listEl = document.querySelector('.js-list');
const btnLoadMore = document.querySelector('.js-load-more');
// const btnEl = document.querySelector('.js-form__btn');

let inputValue = '';
let page = 1;

formEl.addEventListener('submit', onSearchBySubmit);

function onSearchBySubmit (e) {
  page = 1;
  e.preventDefault();
  inputValue = e.target.elements.search.value;

  if (inputValue === '') {
    return;
  }

  getPhotoQuery(inputValue, page).then(data => {
    listEl.innerHTML = createMarcup(data.hits);

    if (data.totalHits > 20) {
      btnLoadMore.classList.remove('is-hidden');
    }
  });
}

btnLoadMore.addEventListener('click', onLoadMore);

function onLoadMore (e) {
  page += 1;
  getPhotoQuery(inputValue, page)
    .then(data => {
      listEl.insertAdjacentHTML('beforeend', createMarcup(data.hits));

      if (data.hits.length < 20) {
        btnLoadMore.classList.add('is-hidden');
      }
    });
};