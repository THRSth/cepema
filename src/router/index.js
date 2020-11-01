import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

import { routes } from "./makeRoutes";
import { makePage } from "./makePage";

const Routes = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      {routes.map(({ path, component, slide }, index) => (
        <Route
          exact
          path={path}
          component={() => makePage(component, slide)}
          key={index}
        />
      ))}
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
