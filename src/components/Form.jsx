import React, { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Filtros } from "../components/Filtros";
import styles from "./../styles/ActivitiesForm.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { GoBackButton } from "./GoBackButton";

export const Form = ({ activity, countries }) => {
  const history = useHistory();

  const [form, setForm] = useState(
    !activity
      ? {
          id: undefined,
          name: "",
          dificulty: 1,
          season: "spring",
          duration: "",
          countries: [],
        }
      : { ...activity, countries: activity.countries.map((el) => el.name) }
  );

  const [error, setError] = useState({ error: false, message: "ta todo bien" });
  const errorChecker = () => {
    if (
      Boolean(form.name) &&
      Boolean(form.dificulty) &&
      Boolean(form.season) &&
      Boolean(form.duration) &&
      Boolean(form.countries.length)
    ) {
      setError({ error: false });

      return;
    }
    if (
      !Boolean(form.name) &&
      Boolean(form.dificulty) &&
      Boolean(form.season) &&
      Boolean(form.duration) &&
      Boolean(form.countries.length)
    ) {
      setError({ error: true, message: "Falta el Campo Nombre" });
      return;
    }
    if (
      Boolean(form.name) &&
      Boolean(form.dificulty) &&
      Boolean(form.season) &&
      !Boolean(form.duration) &&
      Boolean(form.countries.length)
    ) {
      setError({ error: true, message: "Falta el Campo Duracion" });
      return;
    }
    if (
      Boolean(form.name) &&
      Boolean(form.dificulty) &&
      Boolean(form.season) &&
      Boolean(form.duration) &&
      !Boolean(form.countries.length)
    ) {
      setError({ error: true, message: "Falta Elegir uno o mas paises" });
      return;
    }

    error.error = true;
    error.message = "Falta LLenar Datos";
    return;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    errorChecker();
  };

  const onCheckHandler = (e) => {
    if (e.target.checked) {
      setForm({ ...form, countries: [...form.countries, e.target.value] });
    } else {
      setForm({
        ...form,
        countries: form.countries.filter((el) => el !== e.target.value),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!error.error) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND}/activities`,
          form
        );

        history.push("/home/page/1");
      } catch (error) {
        console.error("Se rompio", error);
      }
    } else {
      console.log(error);
    }
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit} className={styles.form}>
        <GoBackButton/>
        <div className={styles.contenedor}>
          <div>
            <div className={`${styles.form__group} ${styles.field}`}>
              <input
                onBlur={errorChecker}
                type="input"
                className={styles.form__field}
                onChange={handleChange}
                value={form.name}
                name="name"
              />
              <label htmlFor="name" className={styles.form__label}>
                Nombre de la Actividad
              </label>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="dificulty">Difficultad {form.dificulty}</label>
            <input
              onBlur={errorChecker}
              onChange={handleChange}
              type="range"
              name="dificulty"
              min="1"
              max="5"
              className={styles.range}
              value={form.value}
            />
          </div>
          <div className={`${styles.form__group} ${styles.field}`}>
            <label className={styles.form__label} htmlFor="duration">
              Duracion
            </label>
            <input
              onBlur={errorChecker}
              className={styles.form__field}
              onChange={handleChange}
              name="duration"
              type="text"
              value={form.duration}
            ></input>
          </div>
          <div
            className={`${styles.form__group} ${styles.field} ${styles.season}`}
          >
            <label htmlFor="season">Temporada</label>
            <select
              className={styles.select}
              value={form.season}
              onChange={handleChange}
              name="season"
            >
              <option value={"spring"}>Primavera</option>
              <option value={"fall"}>Otoño</option>
              <option value={"summer"}>Verano</option>
              <option value={"winter"}>Invierno</option>
            </select>
          </div>
        </div>
        <fieldset>
          <legend htmlFor="countries">Paises: </legend>
          <div className={styles.countries}>
            <SearchBar />
            <Filtros />
          </div>
          <div className={styles.checks}>
            {countries?.length
              ? countries?.map((el) => {
                  return (
                    <div
                      key={el.id}
                      className={`${styles.checkbox} ${
                        form.countries.includes(el.name) ? styles.checked : null
                      }`}
                    >
                      <p>{el.name}</p>
                      <input
                        onBlur={errorChecker}
                        type={"checkbox"}
                        value={el.name}
                        checked={form.countries.includes(el.name)}
                        onChange={(e) => onCheckHandler(e)}
                        className={styles.checkInput}
                      ></input>
                    </div>
                  );
                })
              : null}
          </div>
        </fieldset>
        <div className={styles.submit}>
          {error.error ? <h3>{error.message}</h3> : null}
          <button className={styles.bn632}>AGREGAR</button>
        </div>
      </form>
    </div>
  );
};
