import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <li>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </li>
    </header>
  );
}
