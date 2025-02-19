/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <NavLink to={`${country.country}`} className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </NavLink>
  );
}

export default CountryItem;
