import apiUserService from "../service/apiUserService"

const createUser = async (req, res) => {
    try {

    } catch (e) {
        return res.status(500).json({
            EM: "Something wrong in server",
            EC: -2,
            DT: ''
        })
    }
}

const readUser = async (req, res) => {
    try {
        let data = await apiUserService.getUserWithPage(+req.query.page, +req.query.limit);
        if (data) {
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT
            })
        }
    } catch (e) {
        return res.status(500).json({
            EM: "Something wrong in server",
            EC: -2,
            DT: ''
        })
    }
    let data = await loginRegisterService.createNewUser(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: ''
    })
}

const updateUser = async (req, res) => {
    try {

    } catch (e) {
        return res.status(500).json({
            EM: "Something wrong in server",
            EC: -2,
            DT: ''
        })
    }
    let data = await loginRegisterService.createNewUser(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: ''
    })
}

const deleteUser = async (req, res) => {
    try {

    } catch (e) {
        return res.status(500).json({
            EM: "Something wrong in server",
            EC: -2,
            DT: ''
        })
    }
    let data = await loginRegisterService.createNewUser(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: ''
    })
}

module.exports = {
    createUser, readUser, updateUser, deleteUser
}