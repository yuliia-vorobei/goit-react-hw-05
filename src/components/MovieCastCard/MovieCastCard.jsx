import css from "./MovieCastCard.module.css";

export default function MovieCastCard({ actors }) {
  const defaultImg =
    "http://dummyimage.com/150x200/c4c4c8/646cff.gif&text=No+image!";

  return (
    <ul className={css.list}>
      {actors.map(({ id, name, character, profile_path }) => {
        const url = profile_path
          ? `https://image.tmdb.org/t/p/w200/${profile_path}`
          : defaultImg;

        return (
          <li key={id} className={css.item}>
            <img src={url} alt={name} width="200px" height="300px" />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
