import { Request, Response} from 'express';
import knex from '../database/connection'

class ProductsController {
    async index(request: Request, response: Response) {

        const products = await knex('products')
            .select('products.*');

        return response.json(products);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const product = await knex('products').where('id', id).first();

        if (!product) {
            return response.status(400).json({ message: 'Product not found.' });
        }

        return response.json({ product });
    }

    async create(request: Request, response: Response) {
        const {
            name,
            amount,
            value
        } = request.body;
    
        const trx = await knex.transaction();

        const product = {
            name,
            amount,
            value
        };
    
        const insertedIds = await trx('products').insert(product);
        
        const product_id = insertedIds[0];
        
        await trx.commit();
        
        return response.json({
            id: product_id,
            ...product
        });
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, amount, value } = request.body;

        const product = await knex('products').where('id', id).first();

        if (!product) {
            return response.status(400).json({ message: 'Product not found.' });
        }

        const resp = await knex('products').where({id: id}).update({
            name: name ? name : product.name,
            amount: amount ? amount : product.amount,
            value: value ? value : product.value
        });

        return response.status(200).json({ response: resp, message: 'Updated product.'});
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const resp = await knex('products').where({id: id}).del();

        return response.status(200).json({response: resp, message: 'Delete product.'});
    }
}

export default ProductsController;