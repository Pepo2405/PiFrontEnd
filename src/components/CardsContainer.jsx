import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllCountries } from "../redux/actions/action";
import { Card } from "./Card";
import styles from "../styles/cardsContainer.module.css";

export const CardsContainer = () => {
  const { countries, loading } = useSelector((type) => type);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <div className={styles.contenedor}>
      {countries?.slice(0, 10).map((country) => {
        const { id, name, continent_name, population, flag_img, coatOfArms } =
          country;
        return (
          <Card
            key={id}
            name={name}
            continent_name={continent_name}
            population={population}
            flag_img={flag_img}
            coatOfArms={coatOfArms}
          />
        );
      })}
    </div>
  );
};
