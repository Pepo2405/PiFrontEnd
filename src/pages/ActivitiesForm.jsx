import React, { useEffect } from "react";
import { getAllCountries } from "../redux/slices/countries";
import { useDispatch } from "react-redux";
import { Layout } from "../components/Layout";
import { useSelector } from "react-redux";
import axios from "axios";

import { useParams } from "react-router-dom";
import { Form } from "../components/Form";

export const ActivitiesForm = () => {
  const dispatch = useDispatch();
  const { countries, activities } = useSelector(
    (state) => state.countryReducer
  );
  const { id } = useParams();

  const hola = activities.find((element) => {
    return element.id == id;
  });

  const error = { error: false, message: "ta todo bien" };

  useEffect(() => {
    dispatch(getAllCountries);
  }, [activities]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!error.error) {
      try {
        const response = await axios.post(
          "http://localhost:3001/activities",
          form
        );
      } catch (error) {
        console.error("Se rompio", error);
      }
    } else {
      console.log(error);
    }
  };
  useEffect(() => {}, [hola]);
  return (
    <>
      <Layout>
        <Form countries={countries} activity={hola}></Form>
      </Layout>
    </>
  );
};
