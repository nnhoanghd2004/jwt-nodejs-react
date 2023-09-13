import userService from '../service/userService'
import loginRegisterService from '../service/loginRegisterService'

const testAPI = (req, res) => {
    return res.status(200).json({
        message: 'let go',
        data: 've que'
    })
}

const handleRegister = async (req, res) => {
    let data = await loginRegisterService.createNewUser(req.body)
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: ''
    })
}

const handleLogin = async (req, res) => {
    return res.status(200).json({
        message: 'let go',
        data: 've que'
    })
    // let data = await loginRegisterService.createNewUser(req.body)
    // return res.status(200).json({
    //     EM: data.EM,
    //     EC: data.EC,
    //     DT: ''
    // })
}

module.exports = {
    testAPI, handleRegister, handleLogin
}