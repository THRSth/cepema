//paginas
import Main from "../Pages/Main";
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
    slide: { photos: [foto1, foto], text: "Texto de exemplo" },
    component: Main,
  },
  { path: "/pesquisa", component: Pesquisa },
  { path: "/estrutura", component: Estrutura },
  { path: "/cap", component: Cap },
  { path: "/contato", component: Contato },
  { path: "/localizacao", component: MapContainer },
];
