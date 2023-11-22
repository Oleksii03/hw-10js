const API_KEY = '33184193-09093e83ff1c2949d43a02918';
const BASE_URL = 'https://pixabay.com/api/';

export function getFetchPhoto (query, page) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&page=${page}&per_page=20&orientation=vertical`;

  return fetch(url)
    .then(response => {

      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
};