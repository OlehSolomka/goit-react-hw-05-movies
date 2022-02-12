import { useState, useEffect } from 'react';
import { fetchCredit } from '../../services/film-api';

export default function CastPage({ movieId }) {
  const [actors, setActors] = useState('');

  useEffect(() => {
    fetchCredit(movieId).then(result => {
      result.cast.length > 1
        ? (result.cast.length = 10)
        : setActors(result.cast);
      setActors(result.cast);
    });
  }, [movieId]);

  return (
    <>
      {actors.length > 1 ? (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character:{actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No cast found! Sorry:(</h3>
      )}
    </>
  );
}
