import React from 'react';
import logo from '../../img/frog-logo.png';
import { Link } from 'react-router-dom';
import './formularios.css';

const Registro = () => {
    return(
        <div className="form-container form-regis">
            <form className="formregistro">
                <h4 className="froglogo">
                <img src={logo} alt="logo" />
                </h4>
                <h3>Registrate!</h3>
                <p className="completa">Completa los siguentes campos para crear tu cuenta</p>
                <hr />

                <div className="datos">
                <label htmlFor="nombre"><b>Nombre y Apellido</b></label>
                   <input className="form-control REG" 
                   type="text" placeholder=""
                   name="cedula" 
                   id="cedula" 
                   required />

                <label htmlFor="email"><b>Email</b></label>
                    <input className="form-control REG" 
                    type= "email" 
                    placeholder="Ingresa tu correo electronico"
                    name="email"
                    id="email"
                    required />

                    <label htmlFor="psw"><b>Contraseña</b></label>
                    <input className="form-control REG" 
                    type="password" 
                    placeholder="Ingresa tu contraseña" 
                    name="psw"
                    id="psw" 
                    required />

                    <label htmlFor="frogcard"><b>FrogCard</b></label>
                    <input className="form-control REG" 
                    type="text" 
                    placeholder="Ej: 637693000011111 (Opcional)"
                    name="FrogCard" 
                    id="frogCard" />


                    <div className="localidad">
                    <label className="col-6"htmlFor="Barrio">Barrio</label>
                    <select className="col-6 barrios" id="Barrio" name="Barrio">
                        <option value="Agu">Aguada</option>
                        <option value="Cord">Córdon</option>
                        <option value="Carr">Carrasco</option>
                        <option value="Malv">Malvin</option>
                        <option value="Paler">Palermo</option>
                        <option value="Poci">Pocitos</option>
                        <option value="Pta.C">Punta Carretas</option>
                        
                    </select>
                </div>

                <div className="frogterm">
                    <p className="terminos">No tienes tu FrogCard? <Link to="/frogcard">Solicitala aquí!</Link> </p>
                    <p className="terminos">Al crear tu cuenta estas aceptando nuestros Términos y
                            Condiciones.</p>
                    <div className="finalizado">
                        <button className="registerbtn"><Link to="/" className="linkhome">Crear Cuenta</Link></button>
                    </div>
                </div>
                </div>

                <footer className="userfoot">
                    <span><a href="https://www.instagram.com/leaarbelo">© Leandro Arbelo</a></span>
                </footer>
            </form>
        </div>
    )
}

export default Registro;