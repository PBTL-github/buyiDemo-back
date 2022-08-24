import * as Koa from "koa";
import * as KoaBody from "koa-body";
import router from "./router";

const app: Koa = new Koa();

app.use(KoaBody()).use(router.routes()).use(router.allowedMethods());

export default app;
