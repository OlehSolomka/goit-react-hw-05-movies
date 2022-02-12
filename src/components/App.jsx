import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './Navigation';

const HomePage = lazy(() =>
  import('pages/HomePage/HomePage' /* webpackChunkName: "home-page"*/)
);
const MoviesPage = lazy(() =>
  import('pages/MoviesPage' /* webpackChunkName: "movies-page"*/)
);
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page"*/)
);
const NotFoundPage = lazy(() =>
  import('pages/NotFoundPage' /* webpackChunkName: "not-found-page"*/)
);

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};
