import React from "react";
import styles from "../styles/button.module.css";

export const Button = ({ text, style }) => {
    console.log(style)
  return (
    <div style={style || {}} className={styles.main_div}>
      <button className={styles.texto}>{text}</button>
    </div>
  );
};
