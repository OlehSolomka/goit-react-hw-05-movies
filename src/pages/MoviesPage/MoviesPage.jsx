import MovieList from 'components/MovieList';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as filmAPI from '../../services/film-api';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState('');

  const history = useHistory();
  const location = useLocation();
  const browserSearchQuery =
    new URLSearchParams(location.search).get('query') ?? '';

  useEffect(() => {
    if (!browserSearchQuery) {
      return;
    }
    filmAPI.fetchFilmByQuery(browserSearchQuery).then(resp => {
      setSearchedMovies(resp.results);
      setSearchQuery('');
    });
  }, [browserSearchQuery]);

  const searchMovies = () => {
    if (!searchQuery) {
      return;
    }
    filmAPI.fetchFilmByQuery(searchQuery).then(resp => {
      setSearchedMovies(resp.results);
      setSearchQuery('');
    });

    history.push({ ...location, search: `query=${searchQuery}` });
  };

  return (
    <>
      <div>
        <input
          placeholder="Search film by name"
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="submit" onClick={searchMovies}>
          Search
        </button>
      </div>
      <>{searchedMovies && <MovieList movies={searchedMovies} />}</>
    </>
  );
};

export default MoviesPage;
