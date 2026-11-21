"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userschema = new mongoose_1.default.Schema({
    fname: { type: String, minlength: 5, maxlength: 15, trim: true, required: true },
    lname: { type: String, minlength: 5, maxlength: 15, trim: true, required: true },
    email: { type: String, minlength: 5, maxlength: 15, trim: true, required: true },
    password: { type: String, minlength: 5, maxlength: 15, trim: true, required: true },
    age: { type: Number, required: true },
    gender: { type: String, minlength: 5, maxlength: 15, trim: true, required: true },
    phone: { type: String, minlength: 5, maxlength: 15, trim: true, required: true },
    role: { type: String, minlength: 5, maxlength: 15, trim: true, required: true },
});
exports.UserModel = mongoose_1.default.model("User", userschema);
