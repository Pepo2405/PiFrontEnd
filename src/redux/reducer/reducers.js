import { GET_ALL_COUNTRIES, SEARCH_BY_NAME } from "../actions/types";

const initialState = {
  countries: [],
  favoritos: [],
  activities: [],
  auxCountries: [],
  amogus: "sexo",
  loading: false,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${GET_ALL_COUNTRIES}/pending`:
      console.log("cargando");
      return { ...state, loading: true };
    case `${GET_ALL_COUNTRIES}/fulfilled`:
      console.log("entro aca al menos");
      return {
        ...state,
        countries: payload,
        auxCountries: payload,
        loading: false,
      };
    case `${GET_ALL_COUNTRIES}/rejected`:
      console.log("Salio Mal");
      return { ...state, error: payload };
    case SEARCH_BY_NAME:
      return {
        ...state,
        countries: state.auxCountries.filter((el) =>
          el.name.toLowerCase().includes(payload)
        ),
      };

    default:
      console.log(type);
      console.log("fue para default");
      console.log("aca ta la gilada", payload);
      return { ...state };
  }
};
