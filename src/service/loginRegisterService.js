import db from "../models"
import bcryptjs from "bcryptjs";
import { Op } from "sequelize";

const salt = bcryptjs.genSaltSync(10);
const hashPassword = (password) => {
    return bcryptjs.hashSync(password, salt);
}

const checkEmailExist = async (email) => {
    const data = await db.User.findOne({
        where: { email }
    })
    if (data) {
        return true;
    } else return false;
}
const checkPhoneExist = async (phone) => {
    const data = await db.User.findOne({
        where: { phone }
    })
    if (data) {
        return true;
    } else return false;
}


const createNewUser = async (rawUserData) => {
    try {
        if (await checkEmailExist(rawUserData.email)) {
            return {
                EM: "Email already exists",
                EC: -1,
                DT: ''
            }
        }
        if (await checkPhoneExist(rawUserData.phone)) {
            return {
                EM: "Phone already exists",
                EC: -1,
                DT: ''
            }
        }

        await db.User.create({
            email: rawUserData.email,
            password: hashPassword(rawUserData.password),
            username: rawUserData.username,
            address: rawUserData.address,
            sex: rawUserData.sex,
            phone: rawUserData.phone
        })

        return {
            EM: "Signed Up Successfully",
            EC: 0,
            DT: ''
        }
    } catch (e) {
        console.log(e);
        return {
            EM: "Something wrong in server",
            EC: -2,
            DT: ''
        }
    }
}

const loginUser = async (rawUserData) => {
    try {
        let user = await db.User.findOne({
            where: {
                [Op.or]: [
                    { email: rawUserData.account },
                    { phone: rawUserData.account }
                ]
            }
        })

        if (user) {
            if (bcryptjs.compareSync(rawUserData.password, user.password)) {
                return {
                    EM: "Logged in successfully",
                    EC: 0,
                    DT: ''
                }
            }
        }
        return {
            EM: "Your email or phone number incorrect",
            EC: -1,
            DT: ''
        }
    } catch (e) {
        return {
            EM: "Something wrong in server",
            EC: -2,
        }
    }
}

module.exports = {
    createNewUser, loginUser
}