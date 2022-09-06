import { AppDataSource } from "../../orm/data-source";
import { User } from "../../orm/entity/User";
import * as KoaJwt from "koa-jwt";
import { secret } from "./config";
import { generateToken } from "./utils";

const UserRepository = AppDataSource.getRepository(User);
//查询
export const selectUser = async (username: string, password: string) => {
  let msg = {};
  await AppDataSource.initialize()
    .then(async () => {
      const userItem = await UserRepository.findOne({
        where: { username: username, password: password },
      });
      if (userItem) {
        const uuid = userItem.uuid;
        const token = generateToken(uuid);
        userItem.token = token;
        await UserRepository.save(userItem);
        msg = {
          message: "登陆成功",
          code: 200,
          uuid: uuid,
          token: userItem.token,
        };
      } else {
        msg = {
          message: "登入失败",
          code: 201,
          uuid: undefined,
          token: undefined,
        };
      }
    })
    .catch((error) => console.log(error));

  //断链数据库
  AppDataSource.destroy();

  return msg;
};

//创建
export const createUser = async (username: string, password: string) => {
  let msg = {};
  await AppDataSource.initialize()
    .then(async () => {
      const userData = await UserRepository.findOne({
        where: [{ username: username }],
      });
      if (!userData) {
        const user = new User();
        user.username = username;
        user.password = password;
        await UserRepository.save(user);
        msg = {
          message: "注册成功",
          code: 200,
          uuid: undefined,
          token: undefined,
        };
      } else {
        msg = {
          message: "用户已存在",
          code: 201,
          uuid: undefined,
          token: undefined,
        };
      }
    })
    .catch((error) => console.log(error));

  AppDataSource.destroy();
  return msg;
};
