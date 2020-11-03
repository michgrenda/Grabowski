import React from "react";
import { NavLink } from "react-router-dom";

// Interfaces
interface Routes {
  path: string;
  text: string;
}

const routes: Routes[] = [
  {
    path: "/",
    text: "strona główna",
  },
  {
    path: "/about",
    text: "o nas",
  },
  {
    path: "/offer",
    text: "oferta",
  },
  {
    path: "/gallery",
    text: "galeria",
  },
  {
    path: "/contact",
    text: "kontakt",
  },
];

const Navbar: React.FC = () => {
  const routesList: JSX.Element[] = routes.map(
    (route: Routes): JSX.Element => (
      <li className="navbar__item" key={route.path}>
        <NavLink
          className="navbar__link"
          activeClassName="navbar__link--is-active"
          to={route.path}
          exact
        >
          {route.text}
        </NavLink>
      </li>
    )
  );

  return (
    <header>
      <nav>
        <div className="container-fluid">
          <div className="row">
            <div className="navbar col-12">
              <div className="row">
                <div className="navbar__panel col-12 col-sm-10">
                  <ul className="navbar__list">{routesList}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
