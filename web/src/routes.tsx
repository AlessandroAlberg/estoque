import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import ShowProduct from './pages/ShowProduct';
import CreateProduct from './pages/CreateProduct';
import UpdateProduct from './pages/UpdateProduct';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={ShowProduct} path="/show-products" exact />
            <Route component={CreateProduct} path="/create-products" exact />
            <Route component={UpdateProduct} path="/update-product" />
        </BrowserRouter>
    );
};

export default Routes;