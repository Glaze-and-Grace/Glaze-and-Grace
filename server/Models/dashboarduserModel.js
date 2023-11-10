const db = require('../config');


async function Users() {
    try{
    const result = await db.query('SELECT * FROM users');
            return result.rows;
    }
    catch (error) {
        throw error;
  }
}


async function deleteUser(id) {
    try{
        // console.log("gfgfg");
        const whatis = await db.query('select * from users where id = $1', [id]);
        console.log(whatis.rows[0].is_deleted);
        if (whatis.rows[0].is_deleted == false) {
        await db.query('UPDATE users SET is_deleted = true WHERE id = $1', [id]);
        }else {
        await db.query('UPDATE users SET is_deleted = false WHERE id = $1', [id]);
        }
        return { message: 'User updated successfully' };
        // return 'done';
    }
    
    catch (error) {
        throw error;
  }
}




module.exports = {
    Users,
    deleteUser
};