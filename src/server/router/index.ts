import * as Router from "koa-router";
import { allowToken } from "../../utils/allowToken";
import { login } from "../../utils/userLogin";
import { register } from "../../utils/userRegister";

const userRouter: Router = new Router();

userRouter
  .post("/user/login", login)
  .post("/user/register", register)
  .post("/allowToken", allowToken);

export default userRouter;
