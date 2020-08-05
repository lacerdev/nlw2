import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/8058570?s=460&u=26f85c359c6e21f2ace43f66bd019d5933ba26b3&v=4" alt="André Lacerda" />
                <div>
                    <strong>André Lacerda</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200 mil pessoas já passaram pro uma de minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;
