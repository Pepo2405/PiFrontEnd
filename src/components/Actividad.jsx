import React from "react";
import { Link } from "react-router-dom";
import { EditIcon } from "../assets/icons";
import styles from "../styles/ActivityCard.module.css";

export const Actividad = ({ name, dificulty, season, duration, id, img }) => {
  console.log("lo que llega",img)
  const imagen =
    img ||
    "https://res.cloudinary.com/onlypepo/image/upload/v1670799257/proyectoIndividual/v82kluagq4w2jrpnb8pn.png";
  return (
    <div className={styles.actividad} key={name}>
      <div className={styles.texto}>
        <p className={styles.actTitulo}>{name}</p>
        <img src={imagen} style={{ maxWidth: "200px", maxHeight: "150px" }} />
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
