import * as Router from "koa-router";
import { login } from "../../utils/userLogin";
import { register } from "../../utils/userRegister";

const userRouter: Router = new Router({ prefix: "/user" });

userRouter.post("/login", login).post("/register", register);

export default userRouter;
