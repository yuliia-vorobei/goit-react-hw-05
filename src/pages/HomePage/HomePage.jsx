import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../../api/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {trendingMovies.length > 0 && <MovieList movies={trendingMovies} />}
      {loading && <Loader />}
      {error && <div>Oops, something went wrong...</div>}
    </div>
  );
}
