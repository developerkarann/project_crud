const express = require('express')
const { body } = require('express-validator');
const { addDataController } = require('../controller/userDataController')
const { getDataController } = require('../controller/getDataController')
const { deleteUserData } = require('../controller/deleteUserData')
const { updateUserData, getUser } = require('../controller/updateUserData')
const { signUpController} = require('../controller/signupController')
const { loginController} = require('../controller/loginController');
const { authMiddleware } = require('../middleware/jwtMiddleware');



const router = express.Router()// /api/ ...
// TO Craete User's Data
router.route("/createuser",).post(
    body('name', "Please enter valid name! ").isLength({ min: 5 }),
    [body('email', "Please enter a valid email! ").isEmail(),
    body('number', "Please enter a valid number ").isNumeric(),
    body('number', "Enter minimum 10 digit number! ").isLength({ min: 10 }),
    body('number', "Enter maximum 10 digit number!  ").isLength({ max: 10 })],
    addDataController
);
// To Get All Users Data
router.route('/getusers').get(authMiddleware ,getDataController);

// To Get Particular User Data
router.route('/getuser/:id').get(getUser);

// To Update User Data
router.route('/updateuser/:id').patch(updateUserData);

// To Delete User Data
router.route('/deleteuser/:id').delete(deleteUserData);


// Sign up Api
router.route('/createaccount').post(
    body('name', "Please enter valid name! ").isLength({ min: 5 }),
    [body('email', "Please enter a valid email! ").isEmail(),
    body('number', "Please enter a valid number ").isNumeric(),
    body('number', "Enter minimum 10 digit number! ").isLength({ min: 10 }),
    body('number', "Enter maximum 10 digit number!  ").isLength({ max: 10 }),
    body('password', "Enter minimum 6 digit password!  ").isLength({ min: 6 })],
    signUpController);

// Login Pai
router.route('/login').post(loginController);


module.exports = router