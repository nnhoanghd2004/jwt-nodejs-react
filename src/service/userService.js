// hash Password
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}

const bluebird = require('bluebird');
import mysql from 'mysql2/promise'

const createNewUser = async (email, password, username) => {
    let connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    try {
        const [rows, fields] = await connection.execute('INSERT INTO users (email, password, username) VALUE (?, ?, ?)',
            [email, hashPassword(password), username]);
    } catch (error) {
        console.log(error);
    }
}

const getUserList = async (email, password, username) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    try {
        const [rows, fields] = await connection.execute('Select * from users');
        return rows;
    } catch (error) {
        console.log(error);
    }

}

const deleteUser = async (id) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    try {
        const [rows, fields] = await connection.execute('DELETE FROM users WHERE id=?',
            [id]);
        return rows
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    createNewUser, getUserList, deleteUser
}