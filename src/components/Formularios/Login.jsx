import React from 'react';
import logo from '../../img/frog-logo.png';
import { Link } from 'react-router-dom';
import './formularios.css'

const Login = () => {
    return (
        <>
        <div className="backg">
            <div className="form-container">
                <form className="container-fluid form"
                    id="iniciar"
                    action="">

                    <div className="logouser">
                        <img src={logo} alt="froglogo" className="froglog" />
                        <p>Completa tus datos</p>
                    </div>

                    <div className="user">
                        <label htmlFor="correo">Correo Electrónico</label>
                        <input type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="frog@user.com"
                            required />
                    </div>

                    <div className="pass">
                        <label htmlFor="contraseña">Contraseña</label>
                        <input type="password"
                            className="form-control"
                            name="contraseña"
                            id="contraseña"
                            placeholder="******"
                            minlength="6"
                            required />
                    </div>
                    <div className="row">

                        <div className="form-check sesion">

                            <label className="check">
                                <input type="checkbox" />
                                    <span className="checkmark">Manenter sesión abierta</span>
                            </label>

                        </div>

                        <div className="col-5 regis">
                            <p>No tienes una cuenta?</p>
                            <Link to="/registro" className="link-reg">Registrate</Link>
                        </div>

                        <div className="col-5 offset-2">

                            <button
                                type="submit"
                                className="login">
                                <Link to="/">Iniciar sesión</Link>
                            </button>

                        </div>

                        <footer className="userfoot">
                        <span><a href="https://www.instagram.com/leaarbelo">© Leandro Arbelo</a></span>
                        </footer>

                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login;