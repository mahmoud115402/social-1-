import { NextFunction, Request, Response } from "express";
import { IUser, UserModel } from "../../DB/models/user.model";
import { AppError } from "../../common/utils/globalErrorHandling";
import { HydratedDocument } from "mongoose";


class AuthService {
  private readonly _userModel = UserModel;
  constructor() {}
  signup = async (req: Request, res: Response, next: NextFunction) => {
    let { fname, lname, email, password, CPassword, age, gender, phone, role }: IUser = req.body;
    
  
    const emailExists = await this._userModel.findOne({ email });
    if (emailExists) {
      throw new AppError(`Email:${email} already exists`, 400);
    }
    const newUser: HydratedDocument<IUser> = await this._userModel.create({
      fname,
      lname,
      email,
      password,
      CPassword,
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

export default new AuthService();
