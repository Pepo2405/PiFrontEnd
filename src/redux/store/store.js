import { configureStore } from "@reduxjs/toolkit";
import countryReducer from '../slices/countries'
import thunk from "redux-thunk";

export default configureStore({ reducer: {countryReducer}, middleware: [thunk] });
