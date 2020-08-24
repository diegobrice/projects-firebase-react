import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">Crear cuenta</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Iniciar Sesion</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
