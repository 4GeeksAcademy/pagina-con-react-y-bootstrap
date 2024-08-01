import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            <div className="container">
                <a className="navbar-brand text-black" href="#">National Geographic</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                            <a className="nav-link text-white" href="https://www.nationalgeographic.com.es/mundo-animal">ANIMALES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="https://www.nationalgeographic.com.es/medio-ambiente">MEDIO AMBIENTE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="https://www.nationalgeographic.com.es/ciencia">CIENCIA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="https://historia.nationalgeographic.com.es/">HITORIA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="https://viajes.nationalgeographic.com.es/">VIAJES</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
