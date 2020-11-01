import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Menu from "../Componentes/Menu";

import { routes } from "./makeRouter";
import { makePage } from "./makePage";

const Routes = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      {routes.map(({ path, component, photos }) => (
        <Route
          exact
          path={path}
          component={() => makePage(component, photos)}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
