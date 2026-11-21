import * as z from "zod";
import { GenderEnum } from "../../common/enum/User.enum";

export const signUpSchema = {
  body: z
    .strictObject({
      fName: z.string().min(3).max(20).trim(),
      lName: z.string().min(3).max(20).trim(),
      email: z.string().email(),
      password: z.string().regex(/^([A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      CPassword: z.string(),
      gender: z.enum(GenderEnum).optional(),
      phone: z.string(),
    })
    .superRefine((val, ctx) => {
    if (val.password !== val.CPassword) {
        ctx.addIssue({
            code: "custom",
            message: "password and confirm password must be the same",
            origin: ["CPassword"]
        });
    }
    })
};
