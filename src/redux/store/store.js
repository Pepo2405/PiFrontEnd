import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/reducers";
import thunk from "redux-thunk";

export default configureStore({ reducer: reducer, middleware: [thunk] });
