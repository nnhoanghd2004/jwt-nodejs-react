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
            return res.status(200).json(data);
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
        return res.status(200).json(await userService.updateUser(req.body));
    } catch (e) {
        return res.status(500).json({
            EM: 'Something wrong in server',
            EC: -2,
            DT: '',
        });
    }
};

const handleDeleteUser = async (req, res) => {
    try {
        return res.status(200).json(await userService.deleteUser(req.body.id));
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
