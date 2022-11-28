import React, { useState } from "react";

export const ActivitiesForm = () => {
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  return (
    <form>
      <div>
        <label htmlFor="name">Nombre</label>
        <input onChange={handleChange} name="name" type="text"></input>
      </div>
      <div>
        <label htmlFor="difficulty">Difficultad</label>
        <input onChange={handleChange} name="difficulty" type="text"></input>
      </div>
      <div>
        <label htmlFor="duration">Duracion</label>
        <input onChange={handleChange} name="duration" type="text"></input>
      </div>
      <div>
        <label htmlFor="season">Temporada</label>
        <input onChange={handleChange} name="season" type="text"></input>
      </div>
      <div>
        <label htmlFor="countries">Countries</label>
        <input onChange={handleChange} name="countries" type="text"></input>
      </div>
    </form>
  );
};
