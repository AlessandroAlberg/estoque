import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('products').insert([
        { name: 'Lâmpadas', amount: 5, value: 10},
        { name: 'Copos', amount: 3, value: 15},
        { name: 'Facas', amount: 7, value: 3},
        { name: 'Monitores', amount: 6, value: 600},
        { name: 'Teclados', amount: 1, value: 50}
    ]);
}