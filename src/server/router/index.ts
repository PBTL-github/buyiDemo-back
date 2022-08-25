import * as Router from "koa-router";
import { login } from "../../utils/userLogin";

const userRouter: Router = new Router();

userRouter.post("/login", login);

export default userRouter;
