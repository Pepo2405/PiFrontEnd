import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {  useHistory, useLocation } from "react-router-dom";
import { filtros } from "../redux/slices/countries";
import styles from "../styles/Selector.module.css";

export const Filtros = ({ activities,setPage }) => {
  const location = useLocation();
  const history = useHistory();
  const [filters, setFilters] = useState({
    continents: "All",
    activities: "All",
  });
  const continents = useSelector((state) => state.countryReducer.continents);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(filtros(filters));
    if (location.pathname.includes("/home")) {
      if(filters.continents !== "All" && filters.activities !== "All" ){
        history.push("/home/page/1");
        setPage(1)
      }
    }
  }, [filters]);

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={(e) => {
          e.preventDefault();
          setFilters({
            continents: "All",
            activities: "All",
          });
        }}
      >
        Restablecer
      </button>
      {continents && (
        <>
          <select
            className={styles.select}
            value={filters.continents}
            name="continents"
            onChange={handleChange}
          >
            <option className={styles.option} value={"All"}>
              Continentes
            </option>
            {continents.map((cont, index) => {
              return (
                <option key={index} className={styles.option} value={cont}>
                  {cont}
                </option>
              );
            })}
          </select>
          {activities && (
            <select
              className={styles.select}
              value={filters.activities}
              name="activities"
              onChange={handleChange}
            >
              <option value={"All"} className={styles.option}>
                Todas
              </option>
              {activities.map((el, index) => (
                <option className={styles.option} key={index} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
          )}
          
        </>
      )}
    </div>
  );
};
