import React, { useEffect } from "react";
import { getAllCountries } from "../redux/slices/countries";
import { useDispatch } from "react-redux";
import { Layout } from "../components/Layout";
import { useSelector } from "react-redux";


import { useParams } from "react-router-dom";
import { Form } from "../components/Form";

export const ActivitiesForm = () => {
  const dispatch = useDispatch();
  const { countries, activities } = useSelector(
    (state) => state.countryReducer
  );
  const { id } = useParams();

  const activity = activities.find((element) => {
    return element.id == id;
  });



  useEffect(() => {
    dispatch(getAllCountries);
  }, [activities]);

  useEffect(() => {}, [activity]);
  return (
    <>
      <Layout>
        <Form countries={countries} activity={activity}></Form>
      </Layout>
    </>
  );
};
