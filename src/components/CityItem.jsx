/* eslint-disable react/prop-types */

import cityStyle from "./CityItem.module.css";

import { NavLink } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city, index }) {
  const { deleteCity } = useCities();
  const { id, position } = city;

  function handleClick(e) {
    e.preventDefault();
    console.log(e.target.parentElement);
    deleteCity(id);
  }

  return (
    <li>
      <NavLink
        key={index}
        className={cityStyle.cityItem}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={cityStyle.emoji}>{city.emoji}</span>
        <h3 className={cityStyle.name}>{city.cityName}</h3>
        <time className={cityStyle.date}>{formatDate(city.date)}</time>
        <button className={cityStyle.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </NavLink>
    </li>
  );
}

export default CityItem;
