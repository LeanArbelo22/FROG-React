import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer className="container-fluid foot">
                <div className="container grid-display">

                    <div className="correo">
                        <input type="email" id="email" className=" form-control" />
                        <label className="form-label label" htmlFor="email" aria-placeholder="Correo Electronico">Correo Electronico</label>
                    </div>

                    <button type="submit" className="btn btn-outline-light subscribe">
                        Suscribete a nuestro newsletter
                    </button>

                    <div className="redes">
                        <a className="btn btn-outline-light btn-floating icono" href="https://www.facebook.com/FrogMaxishop/" role="button"
                        ><i className="bi bi-facebook"></i></a>
                        <a className="btn btn-outline-light btn-floating icono" href="https://www.instagram.com/frogmaxishop/" role="button"
                        ><i className="bi bi-instagram"></i></a>
                        <a className="btn btn-outline-light btn-floating icono" href="https://goo.gl/maps/bZ3P3T7Wf7TDgEbD7" role="button"
                        ><i className="bi bi-map"></i></a>
                    </div>
                </div>

                <div className="text-center leandro"><a href="https://www.instagram.com/leaarbelo">© Leandro Arbelo</a></div>


            </footer>
        </>
    )
}

export default Footer;