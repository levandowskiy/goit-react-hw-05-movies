import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [actorInfo, setActorInfo] = useState(null)
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=31c7a05a32884484d4b383be2a7a18a3`)
      .then((response) => response.json())
      .then((data) => {
        setActorInfo(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId])

  return (
    <>
      {loading ?
        <p>Loading...</p>
        :
        actorInfo &&
        actorInfo.cast.map(({ id, profile_path, name, character }) => {
          return <div key={id}>
            <img src={baseImgUrl + profile_path} alt="Actor Img" />
            <p>{name}</p>
            <p>
              Character: <span>{character || "-"}</span>
            </p>
          </div>
        })
      }
    </>
  );
};
export default Cast;
