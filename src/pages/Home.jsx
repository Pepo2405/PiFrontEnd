import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CardsContainer } from "../components/CardsContainer";
import { SearchBar } from "../components/SearchBar";
import { Paginado } from "../components/Paginado";
import { Link, useHistory, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";
import { Filtros } from "../components/Filtros";
import { useDispatch } from "react-redux";
import { getActivities, getAllCountries } from "../redux/slices/countries";
import { AddIcon } from "../assets/icons";


export const Home = () => {
  const { countries, activities } = useSelector(
    (state) => state.countryReducer
  );
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const [sortBy, setSortBy] = useState("az");
  const { num: pageNum } = useParams();
  const [currentPage, setCurrentPage] = useState(pageNum);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const dispatch = useDispatch();
  const history = useHistory()
  const orden = {
    az: [...countries].sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    }),
    za: [...countries]
      .sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      })
      .reverse(),
    masPoblacion: [...countries].sort((a, b) => {
      if (a.population > b.population) return 1;
      if (a.population < b.population) return -1;
      return 0;
    }),
    menosPoblacion: [...countries]
      .sort((a, b) => {
        if (a.population > b.population) return 1;
        if (a.population < b.population) return -1;
        return 0;
      })
      .reverse(),
  };
  const currentCountries = orden[sortBy].slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    dispatch(getActivities());
    dispatch(getAllCountries());

  }, [pageNum]);


  

  return (
    <>
      <Layout nav={paginate}>
        
        <SearchBar nav={setCurrentPage} autofocus={true} />
        <select
          onChange={(e) => {
            setSortBy(e.target.value);
            setCurrentPage(1);
          }}
          className="selector"
        >
          <option value={"az"}>A-Z</option>
          <option value={"za"}>Z-A</option>
          <option value={"menosPoblacion"}> {">"} Poblacion</option>
          <option value={"masPoblacion"}>{"<"} Poblacion</option>
        </select>
        <div style={{ display: "flex", gap: "0.2rem" }}>
          <Filtros
            countries={countries}
            setPage={paginate}
            activities={activities}
          />
          <Link to={"/addActivity"}>
            <AddIcon
              style={{
                height: "40px",
                width: "40px",
                fill: "white",
                borderRadius: "10px",
                border: "3px solid #09aefe",
              }}
            />
          </Link>
        </div>

        {currentCountries.length ? (
          <>
            <CardsContainer countries={currentCountries} sortBy={sortBy} />
          </>
        ) : (
          <>
            <div>
              <h1 className="loader" style={{ fontWeight: "bolder" }}>
                No se encontraron Paises
              </h1>
              <Loader></Loader>
            </div>
          </>
        )}

        <Paginado
          countriesPerPage={countriesPerPage}
          allCountries={countries}
          paginado={paginate}
          currentPage={currentPage}
        />
      </Layout>
    </>
  );
};
