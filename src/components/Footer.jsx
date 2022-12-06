import React from "react";
import styles from "../styles/Footer.module.css";
import { LinkedinIcon, GitHubIcon } from "../assets/icons";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        target="_blank"
        href={"https://www.linkedin.com/in/ignacioniglesias2405"}
      >
        <LinkedinIcon className={styles.button}></LinkedinIcon>
      </a>
      <a href="https://github.com/Pepo2405" target="_blank">
        <GitHubIcon className={styles.button}></GitHubIcon>
      </a>
    </div>
  );
};
