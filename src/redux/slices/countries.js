import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  countries: [],
  paises: [],
  activities: [],
  filters: { continents: "All", Activities: "All" },
  continents: [],
  auxCountries: [],
  loading: false,
  error: {},
};

export const getAllCountries = createAsyncThunk(
  "countries/getCountries",
  async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND}/countries`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getActivities = createAsyncThunk(
  "countries/getActivities",
  async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND}/activities`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    searchByName: (state, action) => {
      state.countries = state.auxCountries.filter((el) =>
        el.name.toLowerCase().includes(action.payload)
      );
    },
    filtrarContinente: (state, action) => {
      if (action.payload == "All") return;
      state.countries = state.auxCountries.filter(
        (el) => el.continent_name == action.payload
      );
    },
    filtros: (state, action) => {
      const { activities, continents } = action.payload;
      if (activities == "All" && continents == "All") {
        state.countries = state.auxCountries;
        return;
      }

      if (activities !== "All" && continents !== "All") {
        state.countries = state.auxCountries.filter(
          (el) =>
            el.continent_name == continents &&
            Boolean(el.Activities.find((act) => act.name == activities))
        );
        return;
      }
      if (activities !== "All") {
        state.countries = state.auxCountries.filter((country) =>
          Boolean(country.Activities.find((act) => act.name == activities))
        );
        return;
      }

      if (continents !== "All") {
        state.countries = state.auxCountries.filter(
          (country) => country.continent_name == continents
        );
        return;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCountries.fulfilled, (state, action) => {
      state.auxCountries = action.payload;
      state.countries = action.payload;
      state.continents = [
        ...new Set(action.payload.map((el) => el.continent_name)),
      ];
    });

    builder.addCase(getAllCountries.rejected, (state, action) => {
      state.error = "se rompio";
    });

    builder.addCase(getActivities.fulfilled, (state, action) => {
      state.activities = [...action.payload];
    });
  },
});

export const {
  searchByName,
  changePage,
  moveToPage,
  filtrarContinente,
  filtros,
} = countrySlice.actions;
export default countrySlice.reducer;
