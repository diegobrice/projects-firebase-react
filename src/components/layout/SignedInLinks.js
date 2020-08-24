import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">Nuevo Proyecto</NavLink>
      </li>
      <li>
        <NavLink to="/">Cerrar Sesion</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          DB
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
