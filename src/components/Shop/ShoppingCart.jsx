import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import Producto from './Producto';
import Carrito from './Carrito';
import Swal from 'sweetalert2';
import puntos from '../../img/tarjetaPuntos.jpg';
import { Link } from 'react-router-dom'
import './envios.css';
import '../Tiendas/tiendas.css'; // no es necesario


function ShoppingCart() {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        async function _fetch() {
            await peticion();
        }
        _fetch()
    }, []
    );

    const peticion = async () => {
        const localJson = './JSON/productos.json'
        const respuesta = await fetch(localJson);
        const data = await respuesta.json();
        const card = data.map(prod => {
            return {
                id: prod.id,
                img: prod.img,
                name: prod.name,
                price: prod.price,
                category: prod.category
            }
        });
        setProductos(card);
    };


    const [cartData, setCartData] = useState([]);

    const [mostrar, setMostrar] = useState(false);

    const addToCart = (data) => {
        data = `${data.name} $${data.price}`;
        setCartData([...cartData, data]);
        setMostrar(true);
        console.log(cartData);
    };


    const comprar = () => {
        Swal.fire({
            title: 'Quieres confirmar la compra?',
            text: "La demora estimada es de 1hr",
            icon: 'question',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar compra'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Exito',
                    'Su compra llegara a la brevedad',
                    'success'
                )
            }
        })
    };


    return (
        <div>
            <Navbar />

            <div className="fondo">
                <img src={puntos} alt="puntos frog" className="frogcard-span" />

                <button className="boton-solicitar">
                    <Link className="link2" to="/frogcard"> Solicitalá aqui </Link>
                </button>
            </div>

            <h1 className="titulo"> Productos </h1>

            <div className="container-fluid">

                <div className="contenedor">
                    {
                        productos.map((product) => {
                            return <Producto key={product.id} data={product} add={addToCart} />
                        })
                    }
                </div>

                {mostrar ?
                    <Carrito shop={comprar} data={cartData} /> : <div className="div-vacio"></div>
                }
            </div>

            <Footer />
        </div>
    )
}

export default ShoppingCart;
