import css from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  const url = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  return (
    <div className={css.container}>
      {url && <img src={url}></img>}
      <div className={css.list}>
        <h2>
          {movie.title}({new Date(movie.release_date).getFullYear()})
        </h2>
        <p>User Score: ({parseFloat(movie.vote_average).toFixed(1)})</p>

        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>
          {movie.genres && movie.genres.map((genre) => genre.name).join(", ")}
        </p>
      </div>
    </div>
  );
}
