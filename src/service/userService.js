// hash Password
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}





const bluebird = require('bluebird');
import mysql from 'mysql2/promise'

const createNewUser = async (email, password, username) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    connection.query(
        'INSERT INTO users (email, password, username) VALUE (?, ?, ?)',
        [email, hashPassword(password), username],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            console.log(results); // results contains rows returned by server
        }
    )
}

const getUserList = async (email, password, username) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });
    // connection.query(
    //     'Select * from users',
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err);
    //         }
    //         console.log(results); // results contains rows returned by server
    //     }
    // )
    try {
        const [rows, fields] = await connection.execute('Select * from users');
        return rows;
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    createNewUser, getUserList
}