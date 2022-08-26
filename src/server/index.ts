import * as Koa from "koa";
import * as KoaBodyParser from "koa-bodyparser";
import router from "./router";

const app: Koa = new Koa();

app.use(KoaBodyParser()).use(router.routes()).use(router.allowedMethods());

export default app;
