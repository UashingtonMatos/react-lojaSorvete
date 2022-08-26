import React from "react";

import './style.css';

const Rodape = () => (
    <footer>
        <div className="container-rodape limitar-secao">
            <img src="/assets/logo.png" alt="" />
            <div>
                <h3>ENDEREÇO</h3>
                <p>Av. Bernardino de<br></br>Campos, 98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>
            <div>
                <h3>CONTATO</h3>
                <p>info@meusite.com</p>
                <p>Tel: (11) 3456-7890</p>
            </div>
            <div>
                <h3>HORÁRIOS</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>
            </div>
        </div>

        <div className="container-rodape-desenvolvedor">
            <p>Gelateria. Orgulhosamente desenvolvido por Uashington da Silva Matos</p>
        </div>
    </footer>
);

export default Rodape;