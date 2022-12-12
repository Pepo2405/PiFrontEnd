import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import styles from "../styles/Paginado.module.css";
import { LeftArrow } from "../assets/icons";

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

  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

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
    let tempNumberOfPages = [...pageNumbers];
    setArrOfCurrButtons(tempNumberOfPages);

    let dotsInitial = "...";

    if (pageNumbers.length < 6) {
      tempNumberOfPages = pageNumbers;
    } else if (pagina >= 1 && pagina <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, pageNumbers.length];
    }  else if (pagina > pageNumbers.length - 3) {
      // > 7
      const sliced = pageNumbers.slice(pageNumbers.length - 4); // slice(10-4)
      tempNumberOfPages = [1, dotsInitial, ...sliced];
    } else if (pagina >= 4 && pagina < pageNumbers.length) {
      // from 5 to 8 -> (10 - 2)
      const sliced1 = pageNumbers.slice(pagina - 2, pagina); // sliced1 (5-2, 5) -> [4,5]
      tempNumberOfPages = [
        1,
        dotsInitial,
        ...sliced1,
        dotsInitial,
        pageNumbers.length,
      ]; // [1, '...', 4, 5, 6, '...', 10]
    }

    setArrOfCurrButtons(tempNumberOfPages);
  }, [pagina, currentPage, allCountries]);
  return (
    <div>
      <div className={styles.pagination}>
        {pagina > 1 ? (
          <LeftArrow
            className={styles.button}
            onClick={() => handleArrow(-1)}
          />
        ) : null}

        {arrOfCurrButtons.length
          ? arrOfCurrButtons.map((num,index) => {
              if (num != "...") {
                return (
                  <NavLink
                    to={`/home/page/${num}`}
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
              } else {
                return <div className={styles.dots} key={num+index}>...</div>;
              }
            })
          : null}

        {pagina < pageNumbers.length ? (
          <LeftArrow
            onClick={() => {
              handleArrow(1);
            }}
            className={styles.button}
            style={{ transform: "scalex(-1)", width: "30px" }}
          />
        ) : null}
      </div>
    </div>
  );
};
