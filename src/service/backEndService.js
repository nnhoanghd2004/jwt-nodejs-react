// hash Password
import bcrypt from 'bcryptjs';
import bluebird from 'bluebird';
import mysql from 'mysql2/promise';
import db from '../models';

const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
};

const createNewUser = async (email, password, username, address, phone, sex) => {
    // console.log(email, password, username, address, phone, sex);
    try {
        await db.User.create({
            email,
            password: hashPassword(password),
            username,
            address,
            sex,
            phone,
        });
    } catch (error) {
        console.log(error);
    }
};

const getUserList = async (email, password, username) => {
    return await db.User.findAll();
    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    // try {
    //     const [rows, fields] = await connection.execute('Select * from User');
    //     return rows;
    // } catch (error) {
    //     console.log(error);
    // }
};

const deleteUser = async (id) => {
    await db.User.destroy({
        where: {
            id,
        },
    });
    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    // try {
    //     const [rows, fields] = await connection.execute('DELETE FROM User WHERE id=?',
    //         [id]);
    //     return rows
    // } catch (error) {
    //     console.log(error);
    // }
};

const getUserById = async (id) => {
    return await db.User.findOne({
        where: {
            id,
        },
    });
    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    // try {
    //     const [rows, fields] = await connection.execute('Select * FROM User WHERE id=?',
    //         [id]);
    //     return rows
    // } catch (error) {
    //     console.log(error);
    // }
};
const updateUser = async (email, username, id) => {
    await db.User.update({ email, username }, { where: { id } });
    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });

    // try {
    //     const [rows, fields] = await connection.execute('UPDATE User SET email=?, username=? WHERE id=?',
    //         [email, username, id]);
    //     return rows
    // } catch (error) {
    //     console.log(error);
    // }
};
module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUser,
};
