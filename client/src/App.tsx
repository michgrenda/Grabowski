import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import Navbar from "./components/layouts/Navbar";
import Logo from "./components/layouts/Logo";
import Contact from "./components/layouts/Contact";
import Footer from "./components/layouts/Footer";
// Pages
import Home from "./pages/Home";

// Interfaces
export interface Routes {
  path: string;
  text: string;
  exact: boolean;
  component?: React.ComponentType;
}

const routes: Routes[] = [
  {
    path: "/",
    text: "strona główna",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    text: "o nas",
    exact: true,
  },
  {
    path: "/offer",
    text: "oferta",
    exact: true,
  },
  {
    path: "/gallery",
    text: "galeria",
    exact: true,
  },
  {
    path: "/contact",
    text: "kontakt",
    exact: true,
  },
];

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Contact />
      <Logo />
      <Navbar routes={routes} />
      <main>
        <Switch>
          {routes.map(({ component: Component, ...rest }) => (
            <Route
              {...rest}
              render={(routeProps) => (Component ? <Component /> : null)}
            />
          ))}
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
