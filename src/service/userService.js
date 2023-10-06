import db from '../models';
import bcryptjs from 'bcryptjs';
import groupService from '../service/groupService';
import { Op } from 'sequelize';

const salt = bcryptjs.genSaltSync(10);
const hashPassword = (password) => {
    return bcryptjs.hashSync(password, salt);
};

const checkEmailExist = async (email) => {
    const data = await db.User.findOne({
        where: { email },
    });
    if (data) {
        return true;
    } else return false;
};
const checkPhoneExist = async (phone) => {
    const data = await db.User.findOne({
        where: { phone },
    });
    if (data) {
        return true;
    } else return false;
};

const createUser = async (rawUserData) => {
    try {
        if (await checkEmailExist(rawUserData.email)) {
            return {
                EM: 'Email already exists',
                EC: -1,
                DT: '',
            };
        }
        if (await checkPhoneExist(rawUserData.phone)) {
            return {
                EM: 'Phone already exists',
                EC: -1,
                DT: '',
            };
        }

        await db.User.create({
            email: rawUserData.email,
            password: hashPassword(rawUserData.password),
            username: rawUserData.username,
            address: rawUserData.address,
            sex: rawUserData.sex,
            phone: rawUserData.phone,
            groupId: rawUserData.group,
        });

        return {
            EM: `Create user ${rawUserData.email} successfully`,
            EC: 0,
            DT: '',
        };
    } catch (e) {
        return {
            EM: 'Something wrong in server',
            EC: -2,
            DT: '',
        };
    }
};

const getAllUser = async () => {
    try {
        const allUser = await db.User.findAll({
            attributes: ['id', 'email', 'username', 'address', 'sex', 'phone'],
            include: { model: db.Group, attributes: ['name', 'desc'] },
            raw: true,
        });
        if (allUser) {
            return {
                EM: 'Get all users successfully',
                EC: 0,
                DT: allUser,
            };
        } else {
            return {
                EM: 'Get all users successfully',
                EC: 0,
                DT: [],
            };
        }
    } catch (e) {
        return {
            EM: 'Something wrong in server',
            EC: -2,
            DT: '',
        };
    }
};

const getUserWithPage = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.User.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: ['id', 'email', 'username', 'address', 'sex', 'phone'],
            include: { model: db.Group, attributes: ['name', 'desc'] },
        });
        const totalPages = Math.ceil(count / limit);
        const data = {
            totalPages,
            totalRows: count,
            users: rows,
        };
        if (count && rows) {
            return {
                EM: 'Get page users successfully',
                EC: 0,
                DT: data,
            };
        } else {
            return {
                EM: 'Get all users successfully',
                EC: 0,
                DT: [],
            };
        }
    } catch (e) {
        return {
            EM: 'Something wrong in server',
            EC: -2,
            DT: '',
        };
    }
};

const deleteUser = async (id) => {
    try {
        await db.User.destroy({
            where: {
                id,
            },
        });
        return {
            EM: 'Delete users successfully',
            EC: 0,
            DT: '',
        };
    } catch (e) {
        return {
            EM: 'Something wrong in server',
            EC: -2,
            DT: '',
        };
    }
};

const updateUser = async (data) => {
    try {
        await db.User.update(
            { username: data.username, address: data.address, phone: data.phone, sex: data.sex, groupId: data.group },
            { where: { id: data.id } },
        );
        console.log('check user service');
        return {
            EM: `Update user ${data.email} successfully`,
            EC: 0,
            DT: '',
        };
    } catch (e) {
        return {
            EM: `Something wrong in server service`,
            EC: -2,
            DT: '',
        };
    }
};

const getUserById = async (id) => {
    try {
    } catch (e) {}
};
module.exports = {
    createUser,
    getAllUser,
    deleteUser,
    getUserById,
    updateUser,
    getUserWithPage,
};
