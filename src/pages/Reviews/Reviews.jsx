import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Reviews.css'

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=31c7a05a32884484d4b383be2a7a18a3`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.results);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
        setReviews([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {reviews && reviews.length > 0 ? (
            <ul>
              {reviews.map(({ content, id, author }) => (
                <li key={id}>
                  <h3>{author}</h3>
                  <p>{content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews found.</p>
          )}
        </>
      )}
    </>
  );
};

export default Reviews;
