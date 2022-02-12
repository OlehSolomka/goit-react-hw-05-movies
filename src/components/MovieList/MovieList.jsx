import { Link } from 'react-router-dom';
import backupImg from '../../pages/MovieDetailsPage/backup.jpg';
import s from './MovieList.module.css';

export default function MovieList({ movies }) {
  return (
    <>
      {movies && (
        <ul className={s.list}>
          {movies.map(movie => (
            <li key={movie.id} className={s.item}>
              <Link to={`movies/${movie.id}`} className={s.link}>
                <h3>{movie.title}</h3>
                <img
                  className={s.image}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                      : backupImg
                  }
                  alt={movie.title}
                  width="200px"
                ></img>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
