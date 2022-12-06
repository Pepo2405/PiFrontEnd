import React from "react";
import styles from "../styles/Selector.module.css";
export const Selector = ({ options, text }) => {
  return (
    <>
      <select className={styles.select}>
        <option className={styles.option} value={"All"}>
          {text || "Todos"}
        </option>
        {options.map((opt, i) => {
          return (
            <option key={i} className={styles.option} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </>
  );
};
