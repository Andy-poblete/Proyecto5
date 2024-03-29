const User = require('../models/User');



const createUser = async (req, res) => {

    try {

        const useEmail = await User.findOne({ email: req.body.email })

        if (useEmail) {
            throw new Error("Email en uso!")
        }

        const newUser = new User(req.body);
        newUser.encriptarPassword(req.body.password);
        await newUser.save();


        res.json({ success: true, message: "Usuario Creado", info: newUser._id, token: newUser.generateToken() })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.findById(id);

        res.json({ success: true, info: users })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}



const getProfile = async(req, res) => {
    try {
        const {id} = req.params;
        const getInfoUser = await User.findById(id).select("-password -salt")

        res.json({success: true, info: getInfoUser })
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

const editUser = async (req, res) => {

    try {
        const { id } = req.params;
        const contain = req.body;

        const updateUser = await User.findByIdAndUpdate(id, contain, { new: true });

        res.json({ success: true, message: "usuario actualizado", updateUser })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const destroyUser = await User.findByIdAndDelete(id);

        res.json({ success: true, msg: "usuario eliminado", destroyUser })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("Usuario no existe!")
        }

        const validarPassword = user.verificarEncriptacion(password, user.salt, user.password)

        if (!validarPassword) {
            throw new Error('Email o contraseña incorrecta!')
        }

        res.json({ success: true, message: "Has iniciado sesion correctamente!", token: user.generateToken() })


    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

const getVerifyUser = async (req, res) => {
    try {
        const { id } = req.auth;
        const getInfoUser = await User.findById(id).select("-password -salt")

        res.json({ success: true, msg: `Informacion de: ${getInfoUser.email}`, info: getInfoUser })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

module.exports = { createUser, getUsers, editUser, deleteUser, loginUser, getProfile, getVerifyUser };