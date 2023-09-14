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
    try {
        let data = await loginRegisterService.loginUser(req.body)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: ''
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            EM: 'Something wrong in server',
            EC: -2,
            DT: ''
        })
    }
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