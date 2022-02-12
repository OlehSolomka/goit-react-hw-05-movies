import { useState, useEffect } from 'react';
import { fetchReviews } from '../../services/film-api';

export default function ReviewsPage({ movieId }) {
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    fetchReviews(movieId).then(result => setReviews(result.results));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>We dont have any reviews for this movie</h3>
      )}
    </>
  );
}
