import { selectUser } from "./common/SqlControl";

export const login = async (ctx: any) => {
    const { username, password } = ctx.request.body;
    const res = await selectUser(username, password);
    ctx.body = res;
    return ctx.body;
};
