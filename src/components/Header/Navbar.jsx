import React, {Fragment} from 'react';
import logo from '../../img/frog-logo.png';
import './navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <Fragment>
            <nav className="navbar">
                <img src={logo} alt="frog logo" className="logos" />
                <ul>
                    <li><Link className="link" to="/">Locales</Link></li>
                    <li><Link className="link" to="/envios">Envios</Link></li>
                    {/* <li><Link className="link" to="/contacto">Contacto</Link></li> */}
                    <li><Link className="link" to="/login">Usuario</Link></li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default Navbar;