import React from "react";
import { Card } from "./Card";
import styles from "../styles/cardsContainer.module.css";
import { motion, AnimatePresence } from "framer-motion";

export const CardsContainer = ({ countries }) => {
  const item = {
    hidden: { opacity: 0, scale: 0, x: -100 },
    show: { scale: 1, opacity: 1 },
  };

  return (
    <AnimatePresence className={styles.contenedor}>
      <motion.div className={styles.cartas}>
        {countries?.map((country, index) => {
          const { id, name, continent_name, population, flag_img, coatOfArms } =
            country;
          return (
            <Card
              animation={item}
              key={id}
              name={name}
              continent_name={continent_name}
              population={population}
              flag_img={flag_img}
              coatOfArms={coatOfArms}
              id={id}
              delay={index}
            />
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
