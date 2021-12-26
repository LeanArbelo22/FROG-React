import React from 'react';

const Producto = ({data, add}) => {
    let {name, price, img} = data;
        return <div className="card" key={name}>
        <img className="imagen-productos" src={img} alt={name} />
        <h4>{name}</h4>
        <p className="precio">${price}</p>
        <button 
        className="boton-agregar" 
        onClick={() => add(data)}
        >
            Agregar
        </button>
    </div>
    
}

export default Producto
