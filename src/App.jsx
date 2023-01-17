import { HashRouter, Route, Routes } from "react-router-dom";
import "../src/Styles/App.css";
import Layout from "../src/Layout/Layout";
import routes from "../src/Navigation/routes";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          {routes.map((route) => {
            return <Route key={route.id} {...route} />;
          })}
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
