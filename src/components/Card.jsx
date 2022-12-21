import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/card.module.css";
import { PersonIcon } from "../assets/icons";
import { motion } from "framer-motion";
export const Card = ({
  id,
  name,
  continent_name,
  population,
  flag_img,
  coatOfArms,
  animation,
  delay,
}) => {
  const poblacion = new Intl.NumberFormat().format(population);

  const coso = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { delay: 0.1 * delay } },
  };

  return (
    <motion.div
      variants={coso}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.08, zIndex: 1 }}
    >
      <NavLink
        to={`/country/${id}`}
        className={styles.container}
        style={{
          background: `center/cover url(${flag_img}) no-repeat `,
        }}
      >
        <div className={styles.container__profile}>
          <img
            className={styles.img}
            src={coatOfArms || flag_img}
            alt="people"
          />
          <div className={styles.container__profile__text}>
            <h2 className={styles.h2}>{name}</h2>
            <p className={styles.p}>
              Continente <b className={styles.b}>{continent_name}</b>
            </p>
          </div>
        </div>
        <div className={styles.container__info}>
          <span className={styles.span}>
            <PersonIcon className={styles.icon} />

            <p className={styles.darkText}>{poblacion}</p>
          </span>
        </div>
      </NavLink>
    </motion.div>
  );
};
