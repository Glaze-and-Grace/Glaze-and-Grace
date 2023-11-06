const { func } = require('joi');
const db = require('../config');


   async function products(id) {
        try {
            const query = `select * from products where category_id = $1 `;
            const value = id;
            const result = await db.query(query, [value]); 
            return result.rows;
            
        } catch (error) {
            // return error.message;
            console.log(error)
        }
      }


      async function newproduct() {
        try {
            
            // const result = await db.query('SELECT * FROM products ORDER BY created_at DESC');
            const result = await db.query('SELECT * FROM products ORDER BY id');
            return result.rows;
            
        } catch (error) {
            throw error;
            // return error.message;
            // console.error(error);
            // res.status(500).send('Internal Server Error');
            
        }
      }


      async function discountproduct() {
        try {
            
            const result = await db.query('select * from products where discount = true');
            return result.rows;
            
        } catch (error) {
            throw error;
            // return error.message;
            // console.error(error);
            // res.status(500).send('Internal Server Error');
            
        }
      }


      async function topproduct() {
        try {
            const result = await db.query('select * from products where rate = 5');
            return result.rows;
        } catch (error) {
            throw error;
            return error.message;
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
      }

async function GETP(){
    try{
        const query = 'SELECT *, categories.category FROM products INNER JOIN categories ON categories.id = products.category_id';
        const result = await db.query(query);
        return result.rows;
    }catch(error){
        return error;
    }
}


module.exports = {
    products,
    newproduct,
    discountproduct,
    topproduct,
    GETP,
};