import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../../api/api";
import MovieReviewsCard from "../MovieReviewsCard/MovieReviewsCard";
import Loader from "../Loader/Loader";

export default function MovieReviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const data = await getMovieReviews(movieId);
        setMovieReviews(data.results);
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
      {/* When done loading, check if there are reviews */}
      {!loading && movieReviews.length === 0 ? (
        <div>No reviews are available</div>
      ) : (
        <MovieReviewsCard reviews={movieReviews} />
      )}
      {error && <div>Oops, something went wrong...</div>}
    </div>
  );
}
