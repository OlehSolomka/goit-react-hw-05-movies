const KEY = '?api_key=f13d574bf8d052eda50f9ad2f6a4d7c7';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchFilms(url = '') {
  const response = await fetch(url);
  return response.ok
    ? response.json()
    : Promise.reject(new Error('404 Not Found'));
}

export function fetchTrendingFilms() {
  return fetchFilms(`${BASE_URL}/trending/movie/day${KEY}`);
}

export function fetchFilmById(id) {
  return fetchFilms(`${BASE_URL}/movie/${id}${KEY}`);
}
export function fetchCredit(id) {
  return fetchFilms(`${BASE_URL}/movie/${id}/credits${KEY}`);
}
export function fetchReviews(id) {
  return fetchFilms(`${BASE_URL}/movie/${id}/reviews${KEY}`);
}
export function fetchFilmByQuery(query) {
  return fetchFilms(`${BASE_URL}/search/movie${KEY}&query=${query}`);
}
