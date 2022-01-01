import React, {useState} from 'react';
import logo from '../../img/frog-logo.png';
import { Link } from 'react-router-dom';
import './formularios.css'

const Login = ({handleLogin}) => {

    const [loginValues, setLoginValues] = useState({
        email: '',
        password: ''
    }) 

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        //console.log(name, value);

        setLoginValues({...loginValues, [name] : value})
    }

    const _handleLogin = (e) => {

        e.preventDefault();
        handleLogin({...loginValues})
        //console.log(loginValues)
        
    }

    return (
        <>
        <div className="backg">
            <div className="form-container">
                <form className="container-fluid form"
                    id="iniciar"
                    onSubmit={_handleLogin}>

                    <div className="logouser">
                        <img src={logo} alt="froglogo" className="froglog" />
                        <p>Completa tus datos</p>
                    </div>

                    <div className="user">
                        <label htmlFor="correo">Correo Electrónico</label>
                        <input type="email"
                            className="form-control"
                            name="email"
                            value={loginValues.email}
                            onChange={handleChange}
                            id="email"
                            placeholder="frog@user.com"
                            required />
                    </div>

                    <div className="pass">
                        <label htmlFor="contraseña">Contraseña</label>
                        <input type="password"
                            className="form-control"
                            name="password"
                            value={loginValues.password}
                            onChange={handleChange}
                            id="contraseña"
                            placeholder="******"
                            minLength="6"
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
                                className="login">Iniciar sesión
                                {/* <Link to="/"></Link> */}
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