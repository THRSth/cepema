import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Menu from "../Componentes/Menu";

import { routes } from "./makeRoutes";
import { makePage } from "./makePage";

const Routes = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      {routes.map(({ path, component, slide }) => (
        <Route exact path={path} component={() => makePage(component, slide )} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
