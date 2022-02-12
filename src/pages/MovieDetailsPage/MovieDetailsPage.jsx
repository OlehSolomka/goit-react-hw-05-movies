import { useState, useEffect, lazy, Suspense } from 'react';
import * as filmAPI from '../../services/film-api';
import backupImg from './backup.jpg';

import {
  useParams,
  NavLink,
  Link,
  useRouteMatch,
  Route,
} from 'react-router-dom';

const Cast = lazy(() =>
  import('../../components/Cast' /*webpackChunkName: "cast"*/)
);
const Reviews = lazy(() =>
  import('../../components/Reviews' /*webpackCunnkName: "reviews" */)
);

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    filmAPI.fetchFilmById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <Link to="/">
        <button>GoBack</button>
      </Link>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                : backupImg
            }
            alt={movie.title}
            width="200px"
          ></img>
          <div>User score:{movie.vote_average}</div>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres:</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <div>
            <hr />
            <h3>Additional information</h3>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </div>
        </div>
      )}
      <hr />
      <Suspense fallback={<h1>LOADING DETAILS...</h1>}>
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </>
  );
}
