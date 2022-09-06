import { createSecretKey } from "crypto";
import { Auth } from "./common/Auth";

export const allowToken = async (ctx: any) => {
  const token = ctx.request.body.token;
  const isValid = Auth.verifyToken(token);
  ctx.body = {
    isValid: isValid,
  };

  return ctx.body;
};
