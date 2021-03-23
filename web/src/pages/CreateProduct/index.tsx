import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.png';

const CreateProduct = () => {

    const [formData, setFormData] = useState({
        name: '',
        amount: '',
        value: '',
    });

    const history = useHistory();

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({ ...formData,  [name]: value })
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { name, amount, value } = formData;

        const data = {
            name,
            amount,
            value
        };

        await api.post('products', data);

        alert('Produto criado!');

        history.push('/');
    }

    return (
        <div id="page-create-product">
            <header>
                <div className="logo">
                    <img src={logo} alt="Estoque"/>
                    <h2 className="title">Estoque</h2>
                </div>

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>

            <form onSubmit={handleSubmit}>
                <h1>Cadastro do <br/> produto no estoque</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome do produto</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="amount">Quantidade de produtos</label>
                            <input 
                                type="number"
                                name="amount"
                                id="amount"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="value">Valor</label>
                            <input 
                                type="number"
                                name="value"
                                id="value"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </fieldset>

                <button type="submit">
                    Cadastrar produto no estoque
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;