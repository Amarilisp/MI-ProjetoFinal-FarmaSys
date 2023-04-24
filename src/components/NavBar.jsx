import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="mb-4">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Farmácias
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/cadastro-farmacia">
                Cadastrar Farmácias
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/lista-farmacia">
                Lista de Farmácias
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Medicamentos
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/cadastro-medicamentos">
                Cadastrar Medicamentos
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="lista-medicamentos">
                Lista de Medicamentos
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="/login"
            role="button"
            aria-expanded="false"
          >
            Sair
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
