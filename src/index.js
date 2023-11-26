import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";

const selectEl = document.querySelector('.breed-select');
const boxInfo = document.querySelector('.js-cat-info');
// const catImg = document.querySelector('.cat__img');

// ----------------------------------------

fetchBreeds().then((data) => {
  // console.log(data);
  selectEl.innerHTML = createMarkup(data);

}).catch((err) => console.error(err));

function createMarkup (data) {
  return data.map(({ id, name }) =>
    `<option value="${id}">${name}</option>`).join('');
};

// --------------------------------------------------------

selectEl.addEventListener('change', (e) => {

  fetchCatByBreed(e.target.value)
    .then((data) => {
      boxInfo.innerHTML = createMarkupBody(data[0]);
    })
    .catch((err) => console.error(err));
});

function createMarkupBody ({ url, breeds }) {
  const { description, temperament, name } = breeds[0];

  return `
      <picture class="cat-info__img">
        <img class="cat__img" src="${url}" alt="${name}" />
      </picture>
     
      <div class="cat-info__content">
        <h3 class="cat-info__name">${name}</h3>
        <br>
        <p class="cat-info__discr">${description}</p>
        <br>
        <p class="cat-info__temp">${temperament}</p>
      </div>
  `;
};