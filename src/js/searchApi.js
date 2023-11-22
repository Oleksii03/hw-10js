import { getFetchPhoto } from "./fetchFn";
import { createMarcup } from "./createMarcup";
import throttle from "lodash.throttle";

const formEl = document.querySelector('.js-form');
const listEl = document.querySelector('.js-list');
const btnLoadMore = document.querySelector('.js-load-more');
const loaderEl = document.querySelector('.js-loader');
const btnSearchUp = document.querySelector('.js-search-up');

let inputValue = '';
let page = 1;

formEl.addEventListener('submit', onSearchBySubmit);

function onSearchBySubmit (e) {
  e.preventDefault();
  page = 1;

  btnLoadMore.classList.add('is-hidden');

  inputValue = e.target.elements.search.value;

  e.target.reset();

  if (inputValue === '') return;

  loaderEl.classList.remove('is-hidden');

  getFetchPhoto(inputValue, page)
    .then(data => {
      listEl.innerHTML = createMarcup(data.hits);

      if (data.totalHits > 20) {
        btnLoadMore.classList.remove('is-hidden');
      }
    })
    .catch(err => {
      listEl.innerHTML = '<h1>Error 404</h1>';
      console.error(err);
    })
    .finally(() => {
      loaderEl.classList.add('is-hidden');
    });
};

btnLoadMore.addEventListener('click', onLoadMore);

function onLoadMore (e) {
  loaderEl.classList.remove('is-hidden');
  page += 1;
  getFetchPhoto(inputValue, page)
    .then(data => {
      listEl.insertAdjacentHTML('beforeend', createMarcup(data.hits));

      if (data.hits.length < 20) {
        btnLoadMore.classList.add('is-hidden');
      }
    })
    .catch(err => {
      listEl.innerHTML = '<h1>Error 404</h1>';
      console.error(err);
    })
    .finally(() => {
      loaderEl.classList.add('is-hidden');
    });
};

// -------scroll-event------------------------------------

const throttleScroll = throttle(onScrollBtnOpen, 300);

document.addEventListener('scroll', throttleScroll);
btnSearchUp.addEventListener('click', onScrollBtnClose);

function onScrollBtnOpen (e) {
  console.log(scrollY);
  if (scrollY > 500) {
    btnSearchUp.classList.add('is-visible');
    document.removeEventListener('scroll', throttleScroll);
  }
};

function onScrollBtnClose (e) {
  btnSearchUp.classList.remove('is-visible');
  document.addEventListener('scroll', throttleScroll);
}