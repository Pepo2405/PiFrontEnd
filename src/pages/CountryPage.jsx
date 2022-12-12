import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllCountries } from "../redux/slices/countries";
import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";
import { AddIcon } from "../assets/icons";
import { GoBackButton } from "../components/GoBackButton";
import { Actividad } from "../components/Actividad";
import styles from "../styles/CountryPage.module.css";

export const Country = () => {
  const { countries } = useSelector((state) => state.countryReducer);
  const dispatch = useDispatch();
  const { id } = useParams();
  const country = countries.find((el) => el.id == id);
  const poblacion = new Intl.NumberFormat().format(country?.population);
  useEffect(() => {
    dispatch(getAllCountries());
  }, []);
  if (country) {
    return (
      <Layout>
        {country && (
          <div className={styles.main}>
            <GoBackButton />
            <header className={styles.header}>
              <div className={styles.titulo}>
                <b>{country.cioc}</b>
                <h1>{country.name}</h1>
                <h2>{country.continent_name}</h2>
              </div>
              <img
                className={styles.img}
                src={country.flag_img}
                alt={`${country.name} flag`}
              ></img>
            </header>
            <section className={styles.sections}>
              <div className={styles.infoPais}>
                <section className={styles.subInfoPais}>
                  <div className={styles.texto}>
                    <h3>Subregion</h3>
                    <p>{country.subregion}</p>
                  </div>
                  <div className={styles.texto}>
                    <h3>Capital: </h3>
                    {country.capital.length
                      ? country.capital.map((cap, index) => {
                          return <h4 key={index}>{cap}</h4>;
                        })
                      : null}
                  </div>
                </section>
                <section className={styles.subInfoPais}>
                  <div className={styles.texto}>
                    <h3>Poblacion:</h3>
                    <p>{poblacion}</p>
                  </div>
                  <div className={styles.texto}>
                    <h3>Idiomas:</h3>
                    <p className={styles.idiomas}>
                      {country.languages.length
                        ? country.languages.map((el) => <b key={el}>{el}</b>)
                        : country.languages}
                    </p>
                  </div>
                </section>
                <section className={styles.subInfoPais}>
                  <div className={styles.texto}>
                    <h3>Zona horaria:</h3>
                    <p>{country.timezones}</p>
                  </div>
                  <div className={styles.texto}>
                    <h3 className={styles.texto}>Area:</h3>
                    <p>{parseInt(country.area) / 1000} km2</p>
                  </div>
                </section>
              </div>
              <div className={styles.actividades}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <h3>Actividades</h3>
                  <Link to={"/addActivity"}>
                    <AddIcon
                      style={{
                        height: "20px",
                        width: "20px",
                        fill: "white",
                        borderRadius: "10px",
                      }}
                    />
                  </Link>
                </div>
                <div className={styles.actividadesContainer}>
                  {country.Activities?.length ? (
                    country.Activities.map((act) => {
                      const { name, dificulty, img, season, duration, id } =
                        act;
                      return (
                        <Actividad
                          name={name}
                          dificulty={dificulty}
                          season={season}
                          duration={duration}
                          id={id}
                          key={id}
                          img={img}
                        />
                      );
                    })
                  ) : (
                    <h4>
                      Parece que nadie agrego actividades, Deberias agregar una!
                    </h4>
                  )}
                </div>
              </div>
            </section>
          </div>
        )}
      </Layout>
    );
  } else {
    return <Loader></Loader>;
  }
};
