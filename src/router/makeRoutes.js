//paginas
import Main from "../Pages/Main";
import Equipe from '../Pages/Equipe';
import Pesquisa from "../Pages/Pesquisa";
import Estrutura from "../Pages/Estrutura";
import Cap from "../Pages/CAP";
import Contato from "../Pages/Contato";
import MapContainer from "../Pages/Localizacao";

//fotos
import foto from "../assets/img/cap1.jpg";
import foto1 from "../assets/img/cap2.jpg";

export const routes = [
  {
    path: "/",
    name: "Inicio",
    slide: { photos: [foto1, foto], text: "Texto de exemplo" },
    component: Main,
  },
  {
    path: "/pesquisa",
    name: "Equipe",
    component: Equipe,
  },
  {
    path: "/pesquisa",
    name: "Pesquisas",
    component: Pesquisa,
  },
  {
    path: "/estrutura",
    name: "Ações",
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
