import React from "react";
import { Card } from "./Card";
import styles from "../styles/cardsContainer.module.css";

export const CardsContainer = ({ countries }) => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.cartas}>
        {countries?.map((country) => {
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
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
};
