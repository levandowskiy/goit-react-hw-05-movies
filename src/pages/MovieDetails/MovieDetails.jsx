import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useState, useEffect, useRef } from 'react';
import './MovieDetails.css'

const MovieDetails = () => {
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? "/dogs");
    const { movieId } = useParams();
    const [filmDetails, setFilmDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=31c7a05a32884484d4b383be2a7a18a3`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(new Error("error 404"))
            })
            .then((data) => {
                setFilmDetails(data);
            })
            .catch((error) => {
                console.log(error);
                alert("Film not found")
            })
            .finally(() => {
                setLoading(false);
            });
    }, [movieId])

    return (
        <div className='wrapperMovieDetails'>
            <Link to={location.state?.from ?? "/"}> Назад </Link>
            {loading ?
                <p>Loading...</p>
                :
                filmDetails &&
                <div className='movieDetails'>
                    <div className='details'>
                        <img src={baseImgUrl + filmDetails.poster_path} alt="film img" />
                        <div className='info'>
                            <h2>{filmDetails.original_title}</h2>
                            <p>
                                User Score: <span>{Math.round((filmDetails.vote_average / 10) * 100) + "%"}</span>
                            </p>
                            <h3>Overview</h3>
                            <p>{filmDetails.overview}</p>
                            <h4>Genres</h4>
                            <p>{filmDetails.genres.map(({ name, id }) => {
                                return <span key={id}>{name} </span>
                            })
                            }</p>
                        </div>
                    </div>

                    <p>Additional information</p>
                    <Link to="cast" state={{ from: backLink.current }}>Cast</Link>
                    <Link to="reviews" state={{ from: backLink.current }}>Reviews</Link>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            }
        </div>
    );
};
export default MovieDetails;