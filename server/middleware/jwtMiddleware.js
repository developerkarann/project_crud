const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];

    // console.log(req.cookies.loginToken)

    if (!bearerHeader) {
        res.status(422).json({
            status: "error",
            message: "User not LoggedIn",
        });
        return;
    }

    const [tokenType, token] = bearerHeader.split(" ");

    if (tokenType.toLowerCase() != "bearer" || token.trim() == "") {
        res.status(403).json({
            status: "error",
            message: "Access blocked due to use of Invalid Token",
        });
        return;
    }

    jwt.verify(token, process.env.SECRETKEY, (err, data) => {
        if (err) {
            res.status(422).json({
                status: "error",
                message: "Invalid Token",
            });
            return;
        }

        req.loginUser = data.user;
        req.token = token;
    });
    next()
}

module.exports = {authMiddleware}