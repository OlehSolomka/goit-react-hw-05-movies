import { useState, useEffect } from 'react';
import * as filmAPI from '../../services/film-api';
import MovieList from 'components/MovieList';

const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState('');
  useEffect(() => {
    filmAPI.fetchTrendingFilms().then(setTrendingFilms);
  }, []);

  return <>{trendingFilms && <MovieList movies={trendingFilms.results} />}</>;
};

export default HomePage;
