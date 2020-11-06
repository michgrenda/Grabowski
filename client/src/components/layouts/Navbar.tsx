import React from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "./../../App";

type Props = {
  routes: Routes[];
};

const Navbar: React.FC<Props> = (props) => {
  const routesList: JSX.Element[] = props.routes.map(
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
            <div className="col-12">
              <div className="navbar">
                <div className="row">
                  <div className="col-12 col-sm-10 offset-sm-1">
                    <div className="navbar__panel">
                      <ul className="navbar__list">{routesList}</ul>
                    </div>
                  </div>
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
