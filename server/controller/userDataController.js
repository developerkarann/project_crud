const userData = require('../model/userDataSchema');
const { validationResult } = require('express-validator');

const addDataController = async (req, res) => {
    const { name, email, number, position } = req.body;

    if (!name || !email || !number || !position) {
        res.status(422).json({
            status: 'error',
            message: 'All fields are required!',
        });
        console.log("All Fields Of Contact Of Is Not Present");
        return;
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array(),
            message: errors.array().map((err) => err.msg).toString(),
        });
    }
    try {
        const Data = await new userData({
            name,
            email,
            number,
            position,
        });
        await Data.save();

        res.status(201).json({ status: 'success', message: 'User added successfully' });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error While adding data ' + error,
        });
    }
};

module.exports = { addDataController };
