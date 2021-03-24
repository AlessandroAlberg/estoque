import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import { connect } from 'react-redux'
import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.png';
//@ts-ignore
const ShowProduct = ({dispatch}) => {
    const [products, setProducts] = useState([]);
    const [id] = useState('');

    useEffect(() => {
        api.get('products'
        ).then(response => {
            setProducts(response.data);
        })
    }, [id]);

    const history = useHistory();

    async function handleUpdate(product: any) {
        await dispatch(toggleProduct(product));
        history.push('/update-product');
    }
    
    async function handleDelete(id: number) {
        await api.delete(`products/${id}`);
        //@ts-ignore
        var array = [];
        await products.forEach((element) => {
            //@ts-ignore
            if(element.id !== id) {
                array.push(element);
            }
        });
        //@ts-ignore
        await setProducts(array);
        alert('Produto deletado!');
    }

    return (
        <div id="page-show-product">
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

            <div className="content">
                <div className="head">
                    <h1>Produtos no estoque</h1>

                    <Link to="/create-products">
                        <strong>Criar produto</strong>
                    </Link>
                </div>

                <table>
                    <thead>
                        <tr>
                            <td>Nome do produto</td>
                            <td>Quantidade</td>
                            <td>Valor</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    {products.map((product: any) => {
                        return <tbody key={product.id}>
                            <tr className="lines">
                                <td>
                                    <p>{product.name}</p>
                                </td>

                                <td>
                                    <p>{product.amount}</p>
                                </td>
                                
                                <td>
                                    <p>R${product.value}</p>
                                </td>                                

                                <td>
                                    <button onClick={() => handleUpdate(product)} type="button">
                                        <span className="btn-update">
                                            Atualizar
                                        </span>
                                    </button>
                                </td>

                                <td>
                                    <button onClick={() => handleDelete(product.id)} type="button">
                                        <FiTrash2 size={20} color="#E81022" />
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                    })}
                </table>
            </div>
        </div>
    );
};

function toggleProduct(product: any) {
    return {
        type: 'TOGGLE_PRODUCT',
        product
    };
}

export default connect(state => ({ product: state }))(ShowProduct);