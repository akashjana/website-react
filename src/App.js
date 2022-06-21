import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
      <Header></Header>
      <Body></Body>
    </Fragment>
  );
}

export default App;
