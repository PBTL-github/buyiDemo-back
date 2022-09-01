import { AppDataSource } from "../../orm/data-source";
import { User } from "../../orm/entity/User";

const UserRepository = AppDataSource.getRepository(User);

export const checkToken = async (token: string) => {
  let item: any = {};
  await AppDataSource.initialize()
    .then(async () => {
      const tokenItem = await UserRepository.findOne({
        where: [{ token: token }],
      });
      if (tokenItem) {
        item = tokenItem;
      }
    })
    .catch((error) => console.log(error));

  AppDataSource.destroy();
  return item;
};
