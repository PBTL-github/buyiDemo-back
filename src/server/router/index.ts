import * as Router from "koa-router";
import { login } from "../../utils/userLogin";

const userRouter: Router = new Router({ prefix: "/user" });

userRouter.post("/login", login);

export default userRouter;
