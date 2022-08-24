// import { AppDataSource } from "./data-source";
// import { User } from "./entity/User";

// AppDataSource.initialize()
//     .then(async () => {})
//     .catch((error) => console.log(error));
import app from "./server";

app.listen(3000, () => {
    console.log("serve is running on http://localhost:3000");
});
