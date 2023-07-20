const userData = require('../model/userDataSchema');

// Get user's data to update
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        let user = await userData.findOne({ _id: id });
        res.status(200).json({
            status: 'success',
            data: user,
        });
        // console.log(Data)
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: 'Error While fetcing all data from database',
            error: error.message,
        });
    }
}

// update user's data
const updateUserData = async (req, res) => {
    try {
        const { id } = req.params;
        const updateUser = await userData.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.status(200).json({
            status: 'success',
            message: 'Data updated',
            data: updateUser,
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: 'Error While updating User Data',
            error: error.message,
        });
    }
}

module.exports = { updateUserData, getUser };
