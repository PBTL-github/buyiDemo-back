import { AppDataSource } from "./orm/data-source";
import { User } from "./orm/entity/User";

// AppDataSource.initialize()
//     .then(async () => {
//         const userRe = AppDataSource.getRepository(User);
//         const user = new User();
//         user.username = "admin";
//         user.password = "123456";
//         await userRe.save(user);
//         const a = await userRe.find();
//         console.log(a);
//     })
//     .catch((error) => console.log(error));
import app from "./server";

app.listen(3000, () => {
    console.log("serve is running on http://localhost:3000");
});
