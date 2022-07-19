import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../../../context/CartContext";

function Header() {
    const {state} = useContext(CartContext);
    return (
        <>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <NavLink className="navbar-brand" to="/">Acasity Academy</NavLink>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><NavLink to="/" className="nav-link px-2 text-secondary">Inicio</NavLink></li>
                            <li><NavLink to="/" className="nav-link px-2 text-white">Cursos</NavLink></li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                   className="nav-link"
                                   aria-current="page"
                                   to="/cart"
                                >
                                    Carrito <i className="bi bi-cart"></i> {state?.cart?.length > 0 && <span className="badge bg-primary">{state?.cart?.length}</span>}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header