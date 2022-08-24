import React from "react";
import { Link } from "react-router-dom";

import './style.css';

const Topo = () => (
    <header>
        <div className="container-topo limitar-secao">
            <img className="logo-topo" src="assets/logo.png" alt="" />

            <nav className="manu-topo">
                <Link className="link-topo" to='/'>Home</Link>
                <Link className="link-topo" to='/sabores'>Sabores</Link>
                <Link className="link-topo" to='/sobre'>Sobre</Link>
            </nav>
        </div>
    </header>
);

export default Topo;