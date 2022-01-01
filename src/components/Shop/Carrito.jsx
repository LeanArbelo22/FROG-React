import React from 'react';

//import PropTypes from 'prop-types';

export default function Carrito({data, shop}) {
    return(        
        <div className="carrito">
        <h3>Tu carrito: </h3>
        <div id="listado" className="lista">
            {data.map((producto, id) => 
            <li key={id}>{producto}</li>
            )}
        </div>
        <button className="boton-agregar" onClick={shop}>Comprar</button>
        </div>
        
    )
}


 Carrito.defaultProps = {
    porDefecto: "nombre, precio y categoria del producto"
 }

