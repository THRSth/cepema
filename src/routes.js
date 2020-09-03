import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Menu from "./Componentes/Menu";
import Main from "./Pages/Main";
import Pesquisa from "./Pages/Pesquisa";
import Estrutura from "./Pages/Estrutura";
import Cap from "./Pages/CAP";
import Contato from "./Pages/Contato";
import localizacao from './Pages/Localizacao';

const  Routes = () => (
    <BrowserRouter>
    <Menu />
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/pesquisa" component={Pesquisa}/>
        <Route exact path="/estrutura" component={Estrutura}/>
        <Route exact path="/cap" component={Cap}/>
        <Route exact path="/contato" component={Contato}/>
        <Route exact path="/localizacao" component={localizacao}/>
    </Switch>
    </BrowserRouter>
);

export default Routes;
