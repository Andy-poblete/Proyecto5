const express = require('express');
const {createUser, getUsers, editUser, deleteUser, loginUser}  = require('../controllers/userController')
const auth = require('../middleware/auth')

const userRouter = express.Router();

userRouter.route('/user')
    .post(createUser)
    .get(auth, getUsers)

userRouter.route('/user/:id')
    .put(auth, editUser)
    .delete(auth, deleteUser)

userRouter.route('/login')
    .post(loginUser)


module.exports = userRouter;