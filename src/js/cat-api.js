const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY = 'live_C9iEtPg54awJpTo4QX7RoGFsgMBvEc90dWA73rvw3AuZJatT06iGrkqCDbqdNZmr';

export function fetchBreeds () {
  const url = `${BASE_URL}breeds?api_key=${API_KEY}`;

  return fetch(url)
    .then((res) => {

      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    });
};

export function fetchCatByBreed (breedId) {
  const url = `${BASE_URL}images/search?api_key=${API_KEY}&breed_ids=${breedId}`;

  return fetch(url)
    .then((res) => {

      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    });
};