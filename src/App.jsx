import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { CardsContainer } from "./components/CardsContainer";
import { Link, Route } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import bg from "./earth.mp4";
import { ActivitiesForm } from "./components/ActivitiesForm";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Route exact path={"/"}>
        <Link  to="/home">
          <Button style={{ position: "absolute", top: "50%" }} text={"Ingresar"} />
        </Link>
        <video autoPlay loop className="video" muted>
          <source src={bg} type="video/mp4"></source>
        </video>
      </Route>
      <Route path={"/home"}>
        <Header className="header" />
        <SearchBar />
        <CardsContainer></CardsContainer>
        <Footer className="footer" />
      </Route>
      <Route exact path={"/addActivity"}>
        <ActivitiesForm></ActivitiesForm>
      </Route>
    </div>
  );
}

export default App;
