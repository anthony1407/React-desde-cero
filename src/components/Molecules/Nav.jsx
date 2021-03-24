import React from "react"
import { NavLink } from "react-router-dom"


const Nav = () => (
    <nav className="main-menu" id="main-menu">
        <ul>
            <li>
                <NavLink to="/" activeClassName="activo" exact>
                    Inicio
            </NavLink>
            </li>
            <li>
                <NavLink to="/cursos" activeClassName="activo">
                    Cursos
            </NavLink>
            </li>
            <li>
                <NavLink to="/formulario" activeClassName="activo">
                    Formulario
            </NavLink>
            </li>
        </ul>
    </nav>
)
export default Nav