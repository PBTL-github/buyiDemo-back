import { createUser } from "./common/SqlControl";

export const register = async (ctx: any) => {
  const { username, password } = ctx.request.body;
  const res = await createUser(username, password);
  ctx.body = res;
  return res;
};
