const userData = require('../model/userDataSchema');

const deleteUserData = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await userData.findByIdAndDelete({ _id: id })
        console.log(deleteUser)
        res.status(200).json({
            status: 'success',
            message: 'User deleted !',
            data: deleteUser,
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: 'Error While Deleting User Data',
            error: error.message,
        });
    }
}

module.exports = { deleteUserData };
