import React from "react";
import styles from "../styles/InputFile.module.css"


export const ImgUpload = ({ setImage }) => {
  return (
    <button className={styles["btn-warning"]}>
      <input
        type={"file"}
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
        name="imageInput"
      />
      <label className={styles.label} htmlFor="imageInput">Subir Imagen</label>
    </button>
  );
};
