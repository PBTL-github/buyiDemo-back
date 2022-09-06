import * as jwt from "jsonwebtoken";
import { secret } from "./config";

export class Auth {
  public static verifyToken(token: string) {
    try {
      const a = jwt.verify(token, secret);

      console.log(a);
      return true;
    } catch (err) {
      return false;
    }
  }
}
