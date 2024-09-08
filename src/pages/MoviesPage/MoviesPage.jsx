import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieBySearch } from "../../../api/api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";
import Loader from "../../components/Loader/Loader";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const query = searchParams.get("query");

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryValue = event.target.elements.query.value.trim();
    if (queryValue) {
      searchParams.set("query", queryValue);
      setSearchParams(searchParams);
    }
    event.target.reset();
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const data = await getMovieBySearch(query);
        setSearchMovie(data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>Oops, something went wrong...</div>}
      <input type="text" name="query" className={css.input}></input>
      <button type="submit" className={css.button}>
        Search
      </button>
      {searchMovie.length > 0 && <MovieList movies={searchMovie} />}
      {loading && <Loader />}
    </form>
  );
}
