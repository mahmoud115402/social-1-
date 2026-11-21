import { Router } from "express";
import AuthService from "./auth.service";
import { signUpSchema } from "./auth.validtion";
import { Validation } from "../../common/middleware/validtion";

const authRouter = Router();

authRouter.post("/signup", Validation(signUpSchema), AuthService.signup);

export default authRouter;
