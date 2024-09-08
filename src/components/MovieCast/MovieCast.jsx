import { useEffect, useState } from "react";
import { getMovieCast } from "../../../api/api";
import MovieCastCard from "../MovieCastCard/MovieCastCard";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function MovieCast() {
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const data = await getMovieCast(movieId);
        setMovieCast(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {!loading && movieCast.length === 0 ? (
        <div>No information about cast available</div>
      ) : (
        <MovieCastCard actors={movieCast} />
      )}
      {error && <div>Oops, something went wrong...</div>}
    </div>
  );
}
