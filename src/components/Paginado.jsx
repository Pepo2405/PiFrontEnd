import React, { useEffect } from "react";
import { NavLink, useHistory, useLocation, useParams } from "react-router-dom";
import styles from "../styles/Paginado.module.css";
import {LeftArrow} from "../assets/icons"

//Recibe

export const Paginado = ({
  countriesPerPage,
  allCountries,
  paginado,
  currentPage,
}) => {
  const pageNumbers = [];
  const { num: pagina } = useParams();
  for (let i = 1; i <= Math.ceil(allCountries.length / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  const history = useHistory();
  const handleArrow = (input) => {
    const parsedPage = parseInt(currentPage);
    const result = parsedPage + input;
    if (!(result < 1) && !(result > pageNumbers.length)) {
      paginado(result);
      history.push("/home/page/" + result);
    }
  };

  useEffect(() => {
  }, [currentPage]);
  return (
    <div className={styles.pagination}>
      <LeftArrow
        className={styles.button}
        onClick={() => handleArrow(-1)}
      ></LeftArrow>
      {pageNumbers.length
        ? pageNumbers.map((num) => {
            return (
              <NavLink
                to={"/home/page/" + num || 1}
                key={num}
                onClick={() => {
                  paginado(num);
                }}
                activeClassName={styles.active}
                className={num == currentPage ? "active" : null}
              >
                {num}
              </NavLink>
            );
          })
        : null}

      <LeftArrow
        onClick={() => {
          handleArrow(1);
        }}
        className={styles.button}
        style={{transform:"scalex(-1)",maxWidth:"30px"}}
      ></LeftArrow>
    </div>
  );
};
