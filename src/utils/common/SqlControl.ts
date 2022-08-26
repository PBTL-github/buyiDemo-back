import { AppDataSource } from "../../orm/data-source";
import { User } from "../../orm/entity/User";

export const selectUser = async (username: string, password: string) => {
    let flag = {};
    await AppDataSource.initialize()
        .then(async () => {
            const UserRepository = AppDataSource.getRepository(User);
            const userItem = await UserRepository.findOne({
                where: { username: username, password: password },
            });
            if (userItem) {
                const u_id = userItem.u_id;
                flag = { message: "登陆成功", code: 200, U_id: u_id };
            } else {
                flag = { message: "登入失败", code: 201, U_id: undefined };
            }
        })
        .catch((error) => console.log(error));

    //断链数据库
    AppDataSource.destroy();

    return flag;
};
