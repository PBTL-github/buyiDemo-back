import { checkToken } from "./common/checkToken";

export const allowToken = async (ctx: any) => {
  const { token } = ctx.request.body;
  if (token) {
    const res = await checkToken(token);
    ctx.body = res;
  }
  return ctx.body;
};
