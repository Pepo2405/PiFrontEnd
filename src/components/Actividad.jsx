import React from "react";
import { Link } from "react-router-dom";
import { EditIcon } from "../assets/icons";
import styles from "../styles/ActivityCard.module.css";

export const Actividad = ({ name, dificulty, season, duration, id, img }) => {
  console.log("lo que llega",img)
  const imagen =
    img ||
    "https://images8.alphacoders.com/479/479393.jpg";
  return (
    <div className={styles.actividad} key={name}>
      <div className={styles.texto}>
        <p className={styles.actTitulo}>{name}</p>
        <img src={imagen} style={{ maxWidth: "200px", maxHeight: "150px",borderRadius:"0.6rem" }} />
        <p>Difficultad : {dificulty}</p>
        <p>Duracion :{duration}</p>
        <p>Temporada: {season}</p>
      </div>
      <Link to={`/addActivity/${id}`}>
        <EditIcon style={{ width: "30" }} className={styles.edit}></EditIcon>
      </Link>
    </div>
  );
};
