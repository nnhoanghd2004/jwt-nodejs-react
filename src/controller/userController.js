import userService from '../service/userService';

const handleCreateUser = async (req, res) => {
    let data = await userService.createUser(req.body);
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: '',
    });
};

const handleReadUser = async (req, res) => {
    try {
        let data = await userService.getUserWithPage(+req.query.page, +req.query.limit);
        if (data) {
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT,
            });
        } else {
            return res.status(500).json({
                EM: 'Something wrong in server',
                EC: -2,
                DT: '',
            });
        }
    } catch (e) {
        return res.status(500).json({
            EM: 'Something wrong in server',
            EC: -2,
            DT: '',
        });
    }
};

const handleUpdateUser = async (req, res) => {
    try {
    } catch (e) {
        return res.status(500).json({
            EM: 'Something wrong in server',
            EC: -2,
            DT: '',
        });
    }
    let data = await loginRegisterService.createNewUser(req.body);
    return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: '',
    });
};

const handleDeleteUser = async (req, res) => {
    try {
        let data = await userService.deleteUser(req.body.id);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: '',
        });
    } catch (e) {
        return res.status(500).json({
            EM: 'Something wrong in server',
            EC: -2,
            DT: '',
        });
    }
};

module.exports = {
    handleCreateUser,
    handleReadUser,
    handleUpdateUser,
    handleDeleteUser,
};
