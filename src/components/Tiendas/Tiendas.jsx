import React, {useEffect, useState} from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import './tiendas.css';
import puntos from '../../img/tarjetaPuntos.jpg';
import { Link } from 'react-router-dom'
import Mapas from './Mapas';
import mostrarMapa from './Mapas';

const Tiendas = ({ users }) => {

    const [locales, setLocales] = useState([]);
    useEffect(() => {
        peticion()
    }, []);

    const peticion = async () => {
        const localJson = './JSON/tiendas.json'
        const respuesta = await fetch(localJson);
        const data = await respuesta.json();
        const card = data.map(tienda => {
            return{
                id: tienda.id,
                name: tienda.name,
                address: tienda.address,
                schedule: tienda.schedule,
                img: tienda.img,
            }
        });
        console.log("Array de sucursales extraido de API local (archivo tiendas.JSON)")
        console.log(card);
        setLocales(card)
    };



    return(
        <div className="cuerpo">
        <Navbar users={users}/>
        <div className="fondo">
            <img src={puntos} alt="puntos frog" className="frogcard-span" />
            <p className="parrafo-notenes">Todavia no la tenes?</p>
            <button className="boton-solicitar"><Link className="link2" to="/frogcard">Solicitala aqui</Link></button>
        </div>
        
        <div className="contenido">
        {
            locales.map(({id, name, address, schedule, img}) => {
                return <div className="sucursal" key={id}>
                    <img className="imagen-locales" src={img} alt={name} id="imgLocal" />
                    <h3>{name}</h3>
                    <button className="btn verMapa" onClick={() => mostrarMapa(id)}><a href="#maps" className="address">{address}</a></button>
                    <p>{schedule}</p>
                </div>
            })
        }
        <Mapas />
        </div>
        <Footer />
        </div>
    )
}

export default Tiendas;