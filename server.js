const Koa = require('koa');
const Router = require('koa-router');
const helmet = require('koa-helmet');

const PORT = process.env.PORT || 8080;

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Hello Tori!';
  // ctx.router available
});

app.use(helmet());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
