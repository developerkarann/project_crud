const AuthSchema = require('../model/authSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            res.status(422).json({
                status: 'error',
                message: 'All fields are required !',
            });
            return;
        }

        const user = await AuthSchema.findOne({ email: email });
        if (!user) {
            res.status(422).json({
                status: "error",
                message: "User not found",
            });
            return
        }
        const comparePassword = await bcrypt.compare(password, user.password)
        if (!comparePassword) {
            res.status(422).json({
                status: "error",
                message: "Wrong password!",
            });
            return
        }
        jwt.sign( {user} , process.env.SECRETKEY, { expiresIn: '1 hour'}, (err, token)=>{
            if (err) {
                res.status(422).json({
                    status: "fail",
                    message: "Internal server error Occur " + err,
                });
                return;
            }

            res.status(200).json({
                status: "success",
                message: "Logged in Successfully",
                token: token
            });
        })
    
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error While calling signup Api' + error,
        });
    }

}

module.exports = { loginController }