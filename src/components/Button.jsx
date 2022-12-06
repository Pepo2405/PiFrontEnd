import React from "react";
import styles from "../styles/button.module.css";
import animations from '../styles/Animations.module.css'
export const Button = ({ text, style }) => {
    
  return (
    <div style={style || {}} className={styles.main_div}>
      <button className={`${styles.texto} ${animations.pulse}`}>{text}</button>
    </div>
  );
};
