const express = require('express');
const { createUser, editUser, deleteUser, loginUser, getProfile } = require('../controllers/userController')
const { auth } = require('../middleware/auth')

const userRouter = express.Router();

userRouter.route('/user')
    .post(createUser)

userRouter.route('/user/:id')
    .put(auth, editUser)
    .delete(auth, deleteUser)
    .get(getProfile)

userRouter.route('/login')
    .post(loginUser)

module.exports = userRouter;