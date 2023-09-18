// hash Password
import bcrypt from 'bcryptjs'
import bluebird, { all } from 'bluebird'
import mysql from 'mysql2/promise'
import db from '../models';

const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}

const createUser = async (email, password, username, address, phone, sex) => {
    try {

    } catch (e) {

    }
}

const getAllUser = async (email, password, username) => {
    try {
        const allUser = await db.User.findAll({
            attributes: ["id", "email", "username", "address", "sex", "phone"],
            include: { model: db.Group, attributes: ["name", "desc"] }
        });
        if (allUser) {
            return {
                EM: "Get all users successfully",
                EC: 0,
                DT: allUser
            }
        } else {
            return {
                EM: "Get all users successfully",
                EC: 0,
                DT: []
            }
        }
    } catch (e) {
        return {
            EM: "Something wrong in server",
            EC: -2,
            DT: ''
        }
    }
}

const getUserWithPage = async (page, limit) => {
    try {
        console.log("test >>>>>>>>>>>>>>>>");
        let offset = (page - 1) * limit;
        const { count, rows } = await db.User.findAndCountAll({
            offset: offset,
            limit: limit
        });
        const totalPages = Math.ceil(count / limit);
        const data = {
            totalPages,
            totalRows: count,
            users: rows
        }
        if (count && rows) {
            return {
                EM: "Get page users successfully",
                EC: 0,
                DT: data
            }
        } else {
            return {
                EM: "Get all users successfully",
                EC: 0,
                DT: []
            }
        }
    } catch (e) {
        return {
            EM: "Something wrong in server",
            EC: -2,
            DT: ''
        }
    }
}

const deleteUser = async (id) => {
    try {

    } catch (e) {

    }
}

const updateUser = async (email, username, id) => {
    try {

    } catch (e) {

    }
}


const getUserById = async (id) => {
    try {

    } catch (e) {

    }
}
module.exports = {
    createUser, getAllUser, deleteUser, getUserById, updateUser,getUserWithPage
}