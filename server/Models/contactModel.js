const { query } = require('express');
const db = require('../config');
const { func } = require('joi');

async function contactus(user_name, user_email, user_message) {
    try {
        console.log(user_name, user_email, user_message)

        const query = `INSERT INTO contactus ( user_name, user_email, user_message) VALUES ($1, $2, $3)`;
        const result = await db.query(query, [user_name, user_email, user_message]);
        //const newmessege = result.rows[0];
        console.log("result1");
        return 'good';
    } catch (error) {
        console.log(error);
        throw error;
    }
  }

async function gatall(){
    try{
        console.log("contactus");
        const query = 'select * from contactus';
        const result = await db.query(query);
        return result.rows;
    }catch(error){
        return error;
    }
}


  module.exports = {
    contactus,
    gatall
};

// const result = await pool.query(
//     'INSERT INTO blogs (title, descraption, image_url,user_id) VALUES ($1, $2, $3,$4) RETURNING *',
//     [title, descraption, image_url,user_id]