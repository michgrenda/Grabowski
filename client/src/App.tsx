import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import Navbar from "./components/layouts/Navbar";
import Logo from "./components/layouts/Logo";
import ContactInformation from "./components/layouts/ContactInformation";
import Footer from "./components/layouts/Footer";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Gallery from "./pages/Gallery";

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
    component: About,
  },
  {
    path: "/offer",
    text: "oferta",
    exact: true,
    component: Offer,
  },
  {
    path: "/gallery",
    text: "galeria",
    exact: true,
    component: Gallery,
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
      <ContactInformation />
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
