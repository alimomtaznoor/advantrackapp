/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import { useSearchParams, useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
function CountryList() {
  const { cities } = useCities();
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  let x = useParams();
  console.log(x);
  let [searchParams] = useSearchParams();
  console.log(searchParams.get("country"));
  return (
    <div>
      <ul className={styles.countryList}>
        {countries.map((country, i) => (
          <CountryItem country={country} key={i} />
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
