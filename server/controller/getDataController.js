const userData = require('../model/userDataSchema');
const getDataController = async (req, res) => {
    try {
        let users = await userData.find({});
        res.status(200).json({
            status: 'success',
            data: users,
        });
        // console.log(Data)
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: 'Error While fetcing all data from database',
            error: error.message,
        });
    }
};

module.exports = { getDataController };
