import React from "react";
import styles from "../styles/card.module.css";

export const Card = ({
  id,
  name,
  continent_name,
  population,
  flag_img,
  coatOfArms,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p className={styles["text-title"]}>{name}</p>
        <img className={styles.img} src={flag_img || coatOfArms}></img>
      </div>
      <div className={styles["card-details"]}>
        <p className={styles["text-body"]}>Continente:</p>
        <p className={styles["text-body"]}>{continent_name}</p>
      </div>
      <button className={styles["card-button"]}>Mas Info</button>
    </div>
  );
};
