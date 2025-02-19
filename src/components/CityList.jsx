/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <div className={styles.cityList}>
      {cities.map((item, index) => (
        <ul key={index}>
          <CityItem city={item} key={index} />
        </ul>
      ))}
    </div>
  );
}

export default CityList;
