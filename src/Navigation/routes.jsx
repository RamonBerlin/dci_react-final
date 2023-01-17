import AboutTeam from "../Pages/AboutTeam/AboutTeam";
import Impressum from "../Pages/Impressum/Impressum";
import HomePage from "../Pages/HomePage/HomePage";
import NotFound from "../Pages/NotFound/NotFound";
import Contact from "../Pages/Contact/Contact";
import CharSheet from "../Pages/CharSheet/CharSheet";

const routes = [
  { path: "./", element: <HomePage />, id: 1 },
  { path: "./about-team", element: <AboutTeam />, id: 2 },
  { path: "./impressum", element: <Impressum />, id: 3 },
  { path: "*", element: <NotFound />, id: 4 },
  { path: "./contact", element: <Contact />, id: 5 },
  { path: "./char-sheet", element: <CharSheet />, id: 6 },
];

export default routes;
