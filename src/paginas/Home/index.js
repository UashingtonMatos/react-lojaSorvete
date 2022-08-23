import React from "react";
import Topo from "../../componentes/topo";

const Home = () => (
    <div>
        <Topo />

        <main>
            <section className="secaoBanner">
                <div>
                    <h1>SORVETE ARTESANAL</h1>
                </div>
            </section>

            <section className="secaoSabores">
                <img src="assets/banner-sabores.jpg" alt="" />

                <div>
                    <h2>Nossos Sabores</h2>
                    <span>Novos e deliciosos</span>
                    <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                </div>
            </section>

        </main>
    </div>
);

export default Home;