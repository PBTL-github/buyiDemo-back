import { createUser } from "./common/SqlControl";

export const register = async (ctx: any) => {
  const { username, password } = ctx.request.body;
  if (username && password) {
    const res = await createUser(username, password);
    ctx.body = res;
  }
  return ctx.body;
};
