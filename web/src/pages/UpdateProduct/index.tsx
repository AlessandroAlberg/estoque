import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { connect } from 'react-redux'
import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.png';
//@ts-ignore
const UpdateProduct = ({product}) => {

    const [formData, setFormData] = useState({
        name: product.name,
        amount: product.amount,
        value: product.value
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

        await api.put(`products/${product.id}`, data);

        alert('Produto atualizado!');

        history.push('/show-products');
    }

    return (
        <div id="page-update-product">
            <header>
                <div className="logo">
                    <img src={logo} alt="Estoque"/>
                    <h2 className="title">Estoque</h2>
                </div>

                <Link to="/show-products">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>

            <form onSubmit={handleSubmit}>
                <h1>Atualizar produto no estoque</h1>

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
                            value={formData.name}
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
                                value={formData.amount}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="value">Valor</label>
                            <input 
                                type="number"
                                name="value"
                                id="value"
                                value={formData.value}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </fieldset>

                <button type="submit">
                    Atualizar produto no estoque
                </button>
            </form>
        </div>
    );
};

export default connect(state => ({ product: state }))(UpdateProduct);