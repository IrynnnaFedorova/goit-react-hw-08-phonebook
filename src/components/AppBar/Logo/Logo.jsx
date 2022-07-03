import { NavLink } from "react-router-dom";
import s from './Logo.module.css';

export default function Logo({link}) {
  return <NavLink className={s.logo} to={link}>
    <p className={s.text}>Phonebook</p>
  </NavLink>
}