import axios from "axios";
import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, SEARCH_BY_NAME } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const Saludo = () => {
  return {
    type: "HOLA",
    payload: "amogus",
  };
};

export const getAllCountries = createAsyncThunk(GET_ALL_COUNTRIES, async () => {
  try {
    const { data } = await axios.get("http://localhost:3001/countries");
    return data;
  } catch (error) {
    return error;
  }
});

export const searchByName = (name) => {
  return {
    type: SEARCH_BY_NAME,
    payload: name,
  };
};




