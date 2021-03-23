import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.png';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Estoque"/>
                    <h2 className="title">Estoque</h2>
                </header>

                <main>
                    <h1>O lugar certo para gerenciar seu negócio.</h1>
                    <p>Ajudamos pessoas a administrar seus estoques de forma eficiente.</p>

                    <Link to="/show-products">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Gerenciar estoque</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
};

export default Home;