const API_KEY = '33184193-09093e83ff1c2949d43a02918';

export function getPhotoQuery (query) {
  return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&page=1&per_page=20&orientation=vertical`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(err => {
      console.error(err);
    });
};