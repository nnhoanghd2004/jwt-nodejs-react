import db from "../models"
import bcryptjs from "bcryptjs";

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
                EC: "-1",
                DT: ''
            }
        }
        if (await checkPhoneExist(rawUserData.phone)) {
            return {
                EM: "Phone already exists",
                EC: "-1",
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
            EM: "Sign Up Success",
            EC: "0",
            DT: ''
        }
    } catch (e) {
        console.log(e);
        return {
            EM: "Something wrong ...",
            EC: "-1",
            DT: ''
        }
    }
}

module.exports = {
    createNewUser
}