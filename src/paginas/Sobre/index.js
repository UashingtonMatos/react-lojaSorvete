import React from "react";
import Topo from "../../componentes/topo";
import Rodape from "../../componentes/rodape";

import './style.css';

const Sobre = () => (
    <div>
        <Topo />

        <main>
            <section className="secao-sobre-banner">
                <div className="container-sobre-banner">
                    <h1>A GELATERIA</h1>
                </div>
            </section>

            <section className="secao-sobre-texto">
                <div className="container-sobre-texto limitar-secao">
                    <div>
                        <h2>Sobre Nós</h2>
                        <span>Nós simplesmente amamos sorvete!</span>
                    </div>
                    <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                </div>
            </section>

            <section className="secao-sobre-imagens">
                <div className="container-sobre-imagens">
                    <img src="assets/sobre-image.jpg" alt="" />
                    <img src="assets/sorveteria.jpg" alt="" />
                </div>
            </section>
        </main>

        <Rodape />
    </div>
);

export default Sobre;