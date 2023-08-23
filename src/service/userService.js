// hash Password
import bcrypt from 'bcryptjs'
import bluebird from 'bluebird'
import mysql from 'mysql2/promise'
import db from '../models';

const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}

const createNewUser = async (email, password, username) => {
    try {
        await db.users.create({
            email: email,
            password: hashPassword(password),
            username: username,
        })
    } catch (error) {
        console.log(error);
    }
}

const getUserList = async (email, password, username) => {
    return await db.users.findAll()
    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    // try {
    //     const [rows, fields] = await connection.execute('Select * from users');
    //     return rows;
    // } catch (error) {
    //     console.log(error);
    // }
}

const deleteUser = async (id) => {
    await db.users.destroy({
        where: {
            id
        }
    })
    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    // try {
    //     const [rows, fields] = await connection.execute('DELETE FROM users WHERE id=?',
    //         [id]);
    //     return rows
    // } catch (error) {
    //     console.log(error);
    // }
}

const getUserById = async (id) => {
    return await db.users.findOne({
        where: {
            id
        }
    })
    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    // try {
    //     const [rows, fields] = await connection.execute('Select * FROM users WHERE id=?',
    //         [id]);
    //     return rows
    // } catch (error) {
    //     console.log(error);
    // }
}
const updateUser = async (email, username, id) => {
    await db.users.update(
        { email, username, },
        { where: { id } }
    )
    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    // try {
    //     const [rows, fields] = await connection.execute('UPDATE users SET email=?, username=? WHERE id=?',
    //         [email, username, id]);
    //     return rows
    // } catch (error) {
    //     console.log(error);
    // }
}
module.exports = {
    createNewUser, getUserList, deleteUser, getUserById, updateUser
}