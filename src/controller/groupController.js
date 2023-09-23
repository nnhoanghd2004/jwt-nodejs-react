import groupService from '../service/groupService';

const handleGetGroups = async (req, res) => {
    try {
        const data = await groupService.getGroup();
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (e) {
        return res.status(500).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    }
};

module.exports = {
    handleGetGroups,
};
