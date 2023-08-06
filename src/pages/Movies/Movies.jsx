import { useLocation, Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Movies = () => {
  const location = useLocation()
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchFilm, setSearchFilm] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get("query")) {
      setSearchValue(searchParams.get("query"))
    }
  }, [searchParams])


  useEffect(() => {
    if (searchValue === "") {
      return
    }

    setSearchParams({ query: searchValue })

    fetchMovies(searchValue);
  }, [searchValue, setSearchParams])

  const fetchMovies = (searchValue) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=31c7a05a32884484d4b383be2a7a18a3&query=${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchFilm(data.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handlerForm = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      alert("Поле пошуку порожне")
      return;
    }
    setLoading(true)
    setSearchValue(inputValue);

    setInputValue("");
  }

  const handlerInput = (e) => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <>
      <form onSubmit={handlerForm} className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          value={inputValue}
          placeholder="Search images and photos"
          onChange={handlerInput}
        />
      </form>
      <ul>
        {loading ?
          <p>Loading...</p>
          :
          searchFilm &&
          searchFilm.map(({ id, title }) => {
            return <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>{title}</Link>
            </li>
          })
        }
        {searchFilm && searchFilm.length === 0 && (
          <p>Нічого не знайдено для даного запиту</p>
        )}
      </ul>
    </>
  );
};
export default Movies;