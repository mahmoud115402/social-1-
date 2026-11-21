"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../../DB/models/user.model");
class AuthService {
    _userModel = user_model_1.UserModel;
    constructor() { }
    signup = async (req, res, next) => {
        const { fname, lname, email, password, age, gender, phone, role } = req.body;
        const emailExists = await this._userModel.findOne({ email });
        if (emailExists) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const newUser = new this._userModel({
            fname,
            lname,
            email,
            password,
            age,
            gender,
            phone,
            role,
        });
        res
            .status(201)
            .json({ message: "User created successfully", user: newUser });
    };
}
exports.default = new AuthService();
