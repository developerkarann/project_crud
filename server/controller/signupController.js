const { validationResult } = require('express-validator');
const AuthScehma = require('../model/authSchema');
const bcrypt = require('bcrypt')

const signUpController = async (req, res) => {
    try {
        const { name, email, number, password, } = req.body;

        if (!name || !email || !number || !password) {
            res.status(422).json({
                status: 'error',
                message: 'All fields are required !',
            });
            return;
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                message: errors.array().map((err) => err.msg).toString(),
            });
        }

        const preUser = await AuthScehma.findOne({ email: email });
        if (preUser) {
            res.status(422).json({
                status: "error",
                message: "This Email already Exists",
            });
            return;
        }
        const hashPassword = await bcrypt.hash(password, 10)

        const userData = await new AuthScehma({
            name: name,
            email: email,
            number: number,
            password: hashPassword,
        });

        await userData.save();
        res.status(201).json({ status: 'success', message: 'Account Created' });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error While calling signup Api' + error,
        });
    }
}

module.exports = { signUpController }