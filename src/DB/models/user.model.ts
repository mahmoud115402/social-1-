import mongoose from "mongoose";
import { GenderEnum, RoleEnum } from "../../common/enum/User.enum";

export interface IUser {
  fname: string;
  lname: string;
  email: string;
  password: string;
  CPassword: string;
  age: number;
  gender: GenderEnum;
  phone: string;
  role: RoleEnum;
}

const userschema = new mongoose.Schema<IUser>({
  fname: {
    type: String,
    minlength: 5,
    maxlength: 15,
    trim: true,
    required: true,
  },
  lname: {
    type: String,
    minlength: 5,
    maxlength: 15,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 15,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 15,
    trim: true,
    required: true,
  },
  CPassword: {
    type: String,
    minlength: 5,
    maxlength: 15,
    trim: true,
    required: true,
  },
  age: { type: Number, required: true },
  gender: {
    type: String,
    minlength: 5,
    maxlength: 15,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    minlength: 5,
    maxlength: 15,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    minlength: 5,
    maxlength: 15,
    trim: true,
    required: true,
  },
});

export const UserModel = mongoose.model<IUser>("User", userschema);
