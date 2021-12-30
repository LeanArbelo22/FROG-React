import React from 'react';
import {useState} from 'react';
import logo from '../../img/frog-logo.png';
import { Link } from 'react-router-dom';
import './formularios.css';

const Registro = ({ handleSubmit }) => {

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        frogcard: 6376930000
    })
    
        //const response = await fetch('https://frog-react-pwa.herokuapp.com/api/auth/new-user');
    
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(name, value);

        setFormValues({...formValues, [name] : value})
    }

    const _handleSubmit = (e) => {

        e.preventDefault();
        handleSubmit({...formValues})
        console.log(formValues)
        
    }



    return(
        <div className="form-container form-regis">
            <form 
            className="formregistro"
            onSubmit={_handleSubmit}
            >
                <div className="logouser2">
                <img src={logo} alt="logo" className="froglog" />
                </div>
                <h3>Registrate!</h3>
                <p className="completa">Completa los siguentes campos para crear tu cuenta</p>
                <hr />

                <div className="datos">
                <label htmlFor="nombre"><b>Nombre y Apellido</b></label>
                   <input className="form-control REG" 
                   type="text" placeholder="Ej: Juan Perez"
                   name="name" 
                   id="cedula" 
                   value={formValues.name}
                   onChange={handleChange}
                   required />

                <label htmlFor="email"><b>Email</b></label>
                    <input className="form-control REG" 
                    type= "email" 
                    placeholder="Ingresa tu correo electronico"
                    name="email"
                    id="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required />

                    <label htmlFor="psw"><b>Contraseña</b></label>
                    <input className="form-control REG" 
                    type="password" 
                    placeholder="Ingresa tu contraseña" 
                    name="password"
                    id="psw" 
                    value={formValues.password}
                    onChange={handleChange}
                    required />

                    <label htmlFor="frogcard"><b>FrogCard</b></label>
                    <input className="form-control REG" 
                    type="text" 
                    placeholder="Ej: 637693000011111 (Opcional)"
                    name="frogcard" 
                    id="frogCard"
                    value={formValues.frogcard}
                    onChange={handleChange}
                    />


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
                    <p className="terminos2">Al crear tu cuenta estas aceptando nuestros Términos y
                            Condiciones.</p>
                    <div className="submit">
                        <button 
                            className="registerbtn"
                            type="submit">
                                Crear Cuenta
                                </button>
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