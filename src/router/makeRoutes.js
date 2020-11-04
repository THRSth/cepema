//paginas
import Main from "../Pages/Main";
import Equipe from "../Pages/Equipe";
import Pesquisa from "../Pages/Pesquisa";
import Estrutura from "../Pages/Estrutura";
import Cap from "../Pages/CAP";
import Contato from "../Pages/Contato";
import MapContainer from "../Pages/Localizacao";

//fotos
import slideAcoes from "../assets/img/slide/acoes";
import slideHome from "../assets/img/slide/home";
import slideEquipe from "../assets/img/slide/equipe";
import slidePesquisas from "../assets/img/slide/pesquisas";

export const routes = [
  {
    path: "/",
    name: "Inicio",
    slide: slideHome,
    component: Main,
  },
  {
    path: "/equipe",
    name: "Equipe",
    slide: slideEquipe,
    component: Equipe,
  },
  {
    path: "/pesquisa",
    name: "Pesquisas",
    slide: slidePesquisas,
    component: Pesquisa,
  },
  {
    path: "/estrutura",
    name: "Ações",
    slide: slideAcoes,
    component: Estrutura,
  },
  {
    path: "/cap",
    component: Cap,
  },
  {
    path: "/contato",
    name: "Contato",
    component: Contato,
  },
  {
    path: "/localizacao",
    component: MapContainer,
  },
];
