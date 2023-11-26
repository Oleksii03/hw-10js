import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";

const selectEl = document.querySelector('.breed-select');
const boxInfo = document.querySelector('.js-cat-info');
const catImg = document.querySelector('.cat__img');

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
    .then((data) => data[0])
    .then(({ url, breeds }) => {
      const { description, temperament, name } = breeds[0];

      console.log(url, description, temperament, name);
    })
    .catch((err) => console.error(err));
});