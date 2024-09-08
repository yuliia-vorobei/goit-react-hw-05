import css from "./MovieCastCard.module.css";

export default function MovieCastCard({ actors }) {
  return (
    <ul className={css.list}>
      {actors.map(({ id, name, character, profile_path }) => (
        <li key={id} className={css.item}>
          {profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={name}
              width="200px"
            />
          )}
          <h3>{name}</h3>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}
