import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllCountries } from "../redux/slices/countries";
import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";
import styles from "../styles/CountryPage.module.css";
import { AddIcon, EditIcon } from "../assets/icons";

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
                <div style={{ display: "flex" }}>
                  <h3>Actividades</h3>
                  <Link to={"/addActivity"}>
                    <AddIcon
                      style={{
                        height: "20px",
                        width: "20px",
                        fill: "white",
                        borderRadius: "10px",
                        border: "2px solid #09aefe",
                      }}
                    />
                  </Link>
                </div>
                <div className={styles.actividadesContainer}>
                  {
                      console.log(country.Activities)

                  }
                  {country.Activities?.length ? (
                    country.Activities.map((act) => {
                      console.log(act)
                      return (
                        <div className={styles.actividad} key={act.name}>
                          <div className={styles.texto}>
                            <p className={styles.actTitulo}>{act.name}</p>
                            <p>Difficultad : {act.dificulty}</p>
                            <p>Duracion :{act.duration}</p>
                            <p>Temporada: {act.season}</p>
                          </div>
                          <Link to={`/addActivity/${act.id}`}>
                            <EditIcon
                              style={{ width: "30" }}
                              className={styles.edit}
                            ></EditIcon>
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <h4>
                      Parece que nadie agrego actividades, Deberias agregar una!{" "}
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
