import * as jwt from "jsonwebtoken";
import { secret, expiresIn } from "./config";

/**
 * 创建token令牌
 * @param uuid
 * @param permission 用户使用权限
 * @returns
 */
export const generateToken = (uuid: string, permission?: number) => {
  const token = jwt.sign({ uuid, permission }, secret, { expiresIn });

  return token;
};
