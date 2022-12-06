import { Route } from "react-router-dom";
import { ActivitiesForm } from "./pages/ActivitiesForm";
import { Welcome } from "./pages/Welcome";
import { Home } from "./pages/Home";
import { Country } from "./pages/CountryPage";
import { useDispatch } from "react-redux";
import { getActivities, getAllCountries } from "./redux/slices/countries";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className="App">
      <Route exact path={"/"}>
        <Welcome />
      </Route>
      <Route exact path={"/home/page/:num"}>
        <Home />
      </Route>
      <Route exact path={"/home"}>
        <Home />
      </Route>
      <Route path={"/country/:id"}>
        <Country />
      </Route>
      <Route exact path={"/editActivity/"}>
        <ActivitiesForm></ActivitiesForm>
      </Route>
      <Route exact path={"/addActivity/"}>
        <ActivitiesForm></ActivitiesForm>
      </Route>
      <Route exact path={"/addActivity/:id"}>
        <ActivitiesForm></ActivitiesForm>
      </Route>
    </div>
  );
}

export default App;
