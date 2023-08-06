import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const location = useLocation()
  const [trendingFilmResult, setTrendingFilmResult] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=31c7a05a32884484d4b383be2a7a18a3")
      .then((response) => response.json())
      .then((data) => {
        setTrendingFilmResult(data.results)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [])

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {loading ?
          <p>Loading...</p>
          :
          trendingFilmResult && trendingFilmResult.map(({ id, name, title }) => {
            return <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }} >{title ?? name}</Link>
            </li>
          })
        }
      </ul>
    </>
  );
};
export default Home;