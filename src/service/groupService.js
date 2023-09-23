import db from '../models';

const getGroup = async () => {
    try {
        const allGroup = await db.Group.findAll({
            attributes: ['id', 'name'],
            raw: true,
        });
        if (allGroup) {
            return {
                EM: 'Get all groups successfully',
                EC: 0,
                DT: allGroup,
            };
        } else {
            return {
                EM: 'Get all groups successfully',
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

module.exports = {
    getGroup,
};
