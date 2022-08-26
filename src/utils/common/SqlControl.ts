import { AppDataSource } from "../../orm/data-source";
import { User } from "../../orm/entity/User";
import userRouter from "../../server/router";

const UserRepository = AppDataSource.getRepository(User);
export const selectUser = async (username: string, password: string) => {
    let msg = {};
    await AppDataSource.initialize()
        .then(async () => {
            const userItem = await UserRepository.findOne({
                where: { username: username, password: password },
            });
            if (userItem) {
                const u_id = userItem.u_id;
                msg = { message: "登陆成功", code: 200, U_id: u_id };
            } else {
                msg = { message: "登入失败", code: 201, U_id: undefined };
            }
        })
        .catch((error) => console.log(error));

    //断链数据库
    AppDataSource.destroy();

    return msg;
};

export const createUser = async (username: string, password: string) => {
    let msg = {};
    await AppDataSource.initialize()
        .then(async () => {
            const userData = await UserRepository.findOne({
                where: { username: username },
            });
            const user = new User();
            if (!userData) {
                user.username = username;
                user.password = password;
                await UserRepository.save(user);
                msg = { message: "注册成功", code: 200, U_id: undefined };
            } else {
                msg = { message: "用户已存在", code: 201, U_id: undefined };
            }
        })
        .catch((error) => console.log(error));

    AppDataSource.destroy();
    return msg;
};
